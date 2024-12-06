import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

class DRLAgent:
    def __init__(self, state_dim, action_dim, hidden_dim=64):
        self.state_dim = state_dim
        self.action_dim = action_dim
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        
        # Initialize actor and critic networks
        self.actor = nn.Sequential(
            nn.Linear(state_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, action_dim),
            nn.Softmax(dim=-1)
        ).to(self.device)
        
        self.critic = nn.Sequential(
            nn.Linear(state_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, 1)
        ).to(self.device)
        
        # Initialize optimizers
        self.actor_optimizer = optim.Adam(self.actor.parameters(), lr=3e-4)
        self.critic_optimizer = optim.Adam(self.critic.parameters(), lr=1e-3)
    
    def select_action(self, state):
        """Select an action given current state."""
        state = torch.FloatTensor(state).to(self.device)
        with torch.no_grad():
            action_probs = self.actor(state)
        action = torch.multinomial(action_probs, 1)
        return action.item()
    
    def update(self, states, actions, rewards, next_states, dones):
        """Update the agent's networks using collected experience."""
        # Convert to tensor
        states = torch.FloatTensor(states).to(self.device)
        actions = torch.LongTensor(actions).to(self.device)
        rewards = torch.FloatTensor(rewards).to(self.device)
        next_states = torch.FloatTensor(next_states).to(self.device)
        dones = torch.FloatTensor(dones).to(self.device)
        
        # Compute advantage
        with torch.no_grad():
            next_values = self.critic(next_states).squeeze()
            target_values = rewards + (1 - dones) * 0.99 * next_values
            
        # Update critic
        values = self.critic(states).squeeze()
        critic_loss = nn.MSELoss()(values, target_values)
        
        self.critic_optimizer.zero_grad()
        critic_loss.backward()
        self.critic_optimizer.step()
        
        # Update actor
        advantages = (target_values - values).detach()
        action_probs = self.actor(states)
        action_log_probs = torch.log(action_probs.gather(1, actions.unsqueeze(1))).squeeze()
        actor_loss = -(action_log_probs * advantages).mean()
        
        self.actor_optimizer.zero_grad()
        actor_loss.backward()
        self.actor_optimizer.step()
        
        return {
            'actor_loss': actor_loss.item(),
            'critic_loss': critic_loss.item(),
            'mean_advantage': advantages.mean().item()
        }
