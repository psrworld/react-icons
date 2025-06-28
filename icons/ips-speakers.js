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
export const IpsSpeakersIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-speakers ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-speakers" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0L280.4 0C265.2 17 256 39.4 256 64l0 193.6c-20.3-20.7-48.7-33.6-80-33.6c-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6l0 33.6c0 24.6 9.2 47 24.4 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM320 503.4c-19.1-11.1-32-31.7-32-55.4l0-112 0-272c0-23.7 12.9-44.4 32-55.4C329.4 3.1 340.3 0 352 0L576 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-224 0c-11.7 0-22.6-3.1-32-8.6zM352 336a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM176 272a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM400 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" })] })));
};
export default IpsSpeakersIcon;
//# sourceMappingURL=ips-speakers.js.map