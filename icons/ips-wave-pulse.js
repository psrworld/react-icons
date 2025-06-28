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
export const IpsWavePulseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-wave-pulse ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wave-pulse" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M319.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 17.7-35.4c10.8-21.7 33-35.4 57.2-35.4L608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-108.2 0L444.6 398.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4L323.7 167.3 255.3 486.7c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L135.9 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l103.9 0c28.6 0 53.7 18.9 61.5 46.4L219.6 348 288.7 25.3C291.8 10.9 304.4 .4 319.1 0z" })] })));
};
export default IpsWavePulseIcon;
//# sourceMappingURL=ips-wave-pulse.js.map