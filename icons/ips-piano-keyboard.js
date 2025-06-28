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
export const IpsPianoKeyboardIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-piano-keyboard ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-piano-keyboard" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM512 224l0 160-80 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0zM400 384l-96 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3zm-128 0l-96 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3zm-128 0l-80 0 0-160 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3z" })] })));
};
export default IpsPianoKeyboardIcon;
//# sourceMappingURL=ips-piano-keyboard.js.map