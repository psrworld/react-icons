# psrworld-react-icons-library

A comprehensive React icon library with thousands of icons across multiple styles including brands, solid, regular, and duotone variations.

## Installation

```bash
npm install psrworld-react-icons-library
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import './App.css'; {/* app.css is optional */}
import { 
  IpsUserIcon,
  IpsHouseIcon, 
  IpsCartShoppingIpstIcon, 
  IpsChairOfficeIcon,
  IpsChartLineUpIcon
} from 'psrworld-react-icons-library';

function App() {
  return (
    <div>
     {/* Ips icons prefix solid */}
     
      <IpsUserIcon /> {/* user icons */}
      
      <IpsHouseIcon /> {/* house icons */}
      
      <IpsCartShoppingIpstIcon /> {/* cart shopping ipst icons */}
      
      <IpsChairOfficeIcon /> {/* chair office icons */}
      
      <IpsChartLineUpIcon /> {/* chartLine up icons */}
    </div>
  );
}

export default App;
```

### Advanced Usage

```jsx
import './App.css'; {/* app.css is optional */}
import { 
  IpsUserIcon,
  IpsHouseIcon, 
  IpsCartShoppingIpstIcon, 
  IpsChairOfficeIcon,
  IpsChartLineUpIcon
} from 'psrworld-react-icons-library';

function CustomIcon() {
  return (
     {/* Ips icons prefix solid */}
     
      <IpsUserIcon /> {/* user icons */}
      
      <IpsHouseIcon className="my-icon-class" /> {/* house icons */}
      
      <IpsCartShoppingIpstIcon
      color="#900C3F" /> {/* cart shopping ipst icons */}
      
      <IpsChairOfficeIcon
      size="2.5rem" /> {/* chair office icons */}
      
      <IpsChartLineUpIcon
      style={{ margin: '10px',padding: '0.5rem', backgroundColor: '#ddd', width: '2.5rem', height: '2.5rem', color: '#FF5733' }}
      /> {/* chartLine up icons */}
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `Ips Ipb` | `string` | **required** | Icon name in format "Ips IconName Icon" |
| `size` | `string` | `"1.5rem"` | Size in rem units ( em, rem, px, ..ect) |
| `color` | `string` | `"currentColor"` | Icon color (CSS color value) |
| `className` | `string` | `""` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles object |

## Icon Collections

PsrWorld includes four icon collections:

### Brand Icons
Use with: `Icons prefix "Ip"`, or `brands "b"`, `Ipb`
```jsx
import { 
  IpbFacebookIcon,
  IpbGoogleIcon,
  IpbGithubIcon
} from 'psrworld-react-icons-library';

  <IpbFacebookIcon />
  <IpbGoogleIcon />
  <IpbGithubIcon />
```

### Solid Icons
Use with: `Icons prefix "Ip"`, or `solid "s"`, `Ips`
```jsx
import { 
  IpsShuttersIcon,
  IpsSquareCaretUpIcon,
  IpsUserIcon,
  IpsNotesIcon
} from 'psrworld-react-icons-library';
  <IpsShuttersIcon />
  <IpsSquareCaretUpIcon />
  <IpsUserIcon />
  <IpsNotesIcon />
```

## Styling

Icons inherit the current text color by default. You can style them using CSS:

```css
.my-icon-class {
  color: #ff6b6b;
  transition: all 0.3s ease;
}

.my-icon-class:hover {
  color: #ff5252;
  transform: scale(1.1);
}
```

## Examples

### Icon Button
```jsx
import { IpsStarIcon } from 'psrworld-react-icons-library';

function IconButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      <IpsStarIcon size="1rem" />
      {children}
    </button>
  );
}
```

### Navigation Menu
```jsx
import { 
  IpsHouseIcon,
  IpsUserIcon,
  IpsEnvelopeIcon
} from 'psrworld-react-icons-library';

function Navigation() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <IpsHouseIcon size="1.2rem" />
          <span>Home</span>
        </li>
        <li>
          <IpsUserIcon size="1.2rem" />
          <span>Profile</span>
        </li>
        <li>
          <IpsEnvelopeIcon" size="1.2rem" />
          <span>Messages</span>
        </li>
      </ul>
    </nav>
  );
}
```

### Social Media Links
```jsx
function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <IpbFacebookIcon size="2rem" color="#1877f2" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <IpbTwitterIcon" size="2rem" color="#1da1f2" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <IpbInstagramIcon" size="2rem" color="#e4405f" />
      </a>
    </div>
  );
}
```

## Browser Support

PsrWorld works in all modern browsers that support:
- ES6 modules
- React 16.8+ (hooks)
- SVG rendering

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

This project is licensed under the [MIT License](https://github.com/psrworld/react-icons/blob/main/LICENSE).

## Support

If you encounter any issues or have questions, please file an issue on our GitHub repository.

---

Made with ❤️ by the PsrWorld team