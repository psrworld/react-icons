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
export const IpsPresentationScreenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-presentation-screen ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-presentation-screen" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 224c0 35.3 28.7 64 64 64l160 0 0 34.7-70.6 70.6c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 445.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L320 386.7l0-34.7 160 0c35.3 0 64-28.7 64-64l0-224c17.7 0 32-14.3 32-32s-14.3-32-32-32L512 0 64 0 32 0zM96 64l384 0 0 224-192 0L96 288 96 64z" })] })));
};
export default IpsPresentationScreenIcon;
//# sourceMappingURL=ips-presentation-screen.js.map