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
export const IpsMessagesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-messages ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-messages" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64L0 256c0 35.3 28.7 64 64 64l32 0 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 320 352 320c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 0zM352 352l-96 0 0 32c0 35.3 28.7 64 64 64l117.3 0 81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3l0-48 32 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-128 0 0 128c0 53-43 96-96 96z" })] })));
};
export default IpsMessagesIcon;
//# sourceMappingURL=ips-messages.js.map