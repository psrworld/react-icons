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
export const IpsCandleHolderIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-candle-holder ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-candle-holder" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 192c-44.2 0-80-35.8-80-80c0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80zm-32 32l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0c17.7 0 32 14.3 32 32l0 208 52.1 0c-2.7-7.5-4.1-15.6-4.1-24c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-208c0-17.7 14.3-32 32-32l32 0zM400 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" })] })));
};
export default IpsCandleHolderIcon;
//# sourceMappingURL=ips-candle-holder.js.map