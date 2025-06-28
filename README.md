# icons.psrworld
# PsrWorld Icons

A comprehensive React icon library with thousands of icons across multiple styles including brands, solid, regular, and duotone variations.

## Installation

```bash
npm install psrworld
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import PsrIcon from 'psrworld';

function App() {
  return (
    <div>
      {/* Brand icons */}
      <PsrIcon icon="brand facebook" />
      <PsrIcon icon="brands twitter" />
      <PsrIcon icon="b instagram" />
      
      {/* Solid icons */}
      <PsrIcon icon="solid heart" />
      <PsrIcon icon="s star" />
      
      {/* Regular icons */}
      <PsrIcon icon="regular user" />
      <PsrIcon icon="r home" />
      
      {/* Duotone icons */}
      <PsrIcon icon="duotone bell" />
      <PsrIcon icon="d calendar" />
    </div>
  );
}

export default App;
```

### Advanced Usage

```jsx
import PsrIcon from 'psrworld';

function CustomIcon() {
  return (
    <PsrIcon 
      icon="solid heart"
      size="2.5"                    // Size in rem units
      color="#ff6b6b"               // Custom color
      className="my-icon-class"     // Custom CSS class
      style={{ margin: '10px' }}    // Inline styles
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | **required** | Icon name in format "style iconname" |
| `size` | `string` | `"1.5"` | Size in rem units |
| `color` | `string` | `"currentColor"` | Icon color (CSS color value) |
| `className` | `string` | `""` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles object |

## Icon Collections

PsrWorld includes four icon collections:

### Brand Icons
Use with: `brand`, `brands`, or `b`
```jsx
<PsrIcon icon="brand facebook" />
<PsrIcon icon="brands google" />
<PsrIcon icon="b github" />
```

### Solid Icons
Use with: `solid` or `s`
```jsx
<PsrIcon icon="solid heart" />
<PsrIcon icon="s star" />
```

### Regular Icons
Use with: `regular` or `r`
```jsx
<PsrIcon icon="regular user" />
<PsrIcon icon="r home" />
```

### Duotone Icons
Use with: `duotone` or `d`
```jsx
<PsrIcon icon="duotone bell" />
<PsrIcon icon="d calendar" />
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
      <PsrIcon icon="solid star" size="1" />
      {children}
    </button>
  );
}
```

### Navigation Menu
```jsx
function Navigation() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <PsrIcon icon="r home" size="1.2" />
          <span>Home</span>
        </li>
        <li>
          <PsrIcon icon="r user" size="1.2" />
          <span>Profile</span>
        </li>
        <li>
          <PsrIcon icon="r envelope" size="1.2" />
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
        <PsrIcon icon="brand facebook" size="2" color="#1877f2" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <PsrIcon icon="brand twitter" size="2" color="#1da1f2" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <PsrIcon icon="brand instagram" size="2" color="#e4405f" />
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

This project is licensed under the [MIT License](https://github.com/psrworld/icons.psrworld/blob/main/LICENSE).

## Support

If you encounter any issues or have questions, please file an issue on our GitHub repository.

---

Made with ❤️ by the PsrWorld team