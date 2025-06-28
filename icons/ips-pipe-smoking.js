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
export const IpsPipeSmokingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pipe-smoking ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pipe-smoking" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M575.2 64c-32.1 0-62.1 16-79.9 42.7l-61.8 92.7c-3.9-4.8-8.6-9.1-14-12.7l-24-16c-4.7-3.2-9.7-5.6-14.9-7.4L442 71.2C471.7 26.7 521.7 0 575.2 0L608 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.8 0zM333.4 206.2c9.8-14.7 29.7-18.7 44.4-8.9l24 16c14.7 9.8 18.7 29.7 8.9 44.4L287.8 442.1C258.6 485.8 209.6 512 157.1 512C70.3 512 0 441.7 0 354.9L0 272c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 50.3 77.4-116.1z" })] })));
};
export default IpsPipeSmokingIcon;
//# sourceMappingURL=ips-pipe-smoking.js.map