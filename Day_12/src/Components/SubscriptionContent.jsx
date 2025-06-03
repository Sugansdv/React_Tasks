import React, { useContext } from 'react';
import { SubscriptionContext } from './SubscriptionContext';

const SubscriptionContent = () => {
  const { isPremium, toggleSubscription } = useContext(SubscriptionContext);

  return (
    <div className="subscription-box">
      <h2>
        {isPremium ? '🌟 Welcome, Premium Member!' : '👋 Hello, Free User'}
      </h2>
      <p>
        {isPremium
          ? 'You have access to all premium features and exclusive content.'
          : 'Upgrade to premium to unlock exclusive content.'}
      </p>
      <button onClick={toggleSubscription}>
        {isPremium ? 'Switch to Free' : 'Upgrade to Premium'}
      </button>
    </div>
  );
};

export default SubscriptionContent;
