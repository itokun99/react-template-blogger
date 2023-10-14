import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaHome
} from 'react-icons/fa';

interface IconProps {
  name?: string;
  style?: React.CSSProperties | object;
}

const Icon: React.FC<IconProps> = ({ name, style, ...props }) => {
  switch (name) {
    case 'facebook':
      return <FaFacebookF {...props} style={style} />;
    case 'twitter':
      return <FaTwitter {...props} style={style} />;
    case 'instagram':
      return <FaInstagram {...props} style={style} />;
    case 'github':
      return <FaGithub {...props} style={style} />;
    case 'linkedin':
      return <FaLinkedin {...props} style={style} />;
    case 'youtube':
      return <FaYoutube {...props} style={style} />;
    case 'home':
      return <FaHome {...props} style={style} />;
    default:
      return null;
  }
};

const IconMemo = React.memo(Icon);

export default IconMemo;
