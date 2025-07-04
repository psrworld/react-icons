var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsNfcSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-nfc-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-nfc-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68L544 96c0-35.3-28.7-64-64-64L160 32c-21.6 0-40.7 10.7-52.3 27.1L38.8 5.1zM173.5 110.7c8.7-9 21-14.7 34.5-14.7l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-3.3 0-6.4 1-8.9 2.7l-25.6-20.1zM302.1 211.5c.6-.3 1.3-.5 1.9-.7l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 206.9-32-25.1L448 144c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 2.3-.2 4.6-.5 6.8l-65.5-51.3zM486.9 479.6L406.2 416 208 416c-26.5 0-48-21.5-48-48l0-145.9L96 171.6 96 416c0 35.3 28.7 64 64 64l320 0c2.3 0 4.6-.1 6.9-.4zM208 384l157.5 0L192 247.3 192 368c0 8.8 7.2 16 16 16z" })] })));
};
export default IpsNfcSlashIcon;
//# sourceMappingURL=ips-nfc-slash.js.map