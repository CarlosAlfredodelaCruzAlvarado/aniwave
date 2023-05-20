import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./SocialMedia.css"

export const SocialMedia = () => {
    return (
      <div>
        <p className='titulo'>Síguenos en nuestras redes sociales:</p>
  
        <div >
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="social-media-icon" fontSize="large" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="social-media-icon" fontSize="large"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="social-media-icon" fontSize="large"/>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="social-media-icon" fontSize="large"/>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="social-media-icon" fontSize="large"/>
          </a>
        </div>
      </div>
    );
  };
  
