import React from 'react';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

const SocialSharing = ({ workoutData }) => {
  const shareUrl = 'https://www.workoutandresearch.com/workout-progress';
  const title = 'Check out my workout progress!';
  
  return (
    <div>
      <TwitterShareButton url={shareUrl} title={title}>
        Share on Twitter
      </TwitterShareButton>
    </div>
  );
};

export default SocialSharing;