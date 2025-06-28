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
export const IpsStarshipFreighterIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-starship-freighter ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-starship-freighter" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c42.3 0 84.2 7.9 123.6 23.2l207.9 80.9c12.3 4.8 20.4 16.6 20.4 29.8l0 42.1c0 8.8-7.2 16-16 16l-114.3 0L432 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l13.7 0L560 288c8.8 0 16 7.2 16 16l0 42.1c0 13.2-8.1 25-20.4 29.8l-82.1 31.9c4.1 7.1 6.5 15.3 6.5 24.1c0 26.5-21.5 48-48 48l-80 0c-11.5 0-21.6-6.1-27.3-15.2C292.2 474.9 258.2 480 224 480zm0-272a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM80 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48-112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM112 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" })] })));
};
export default IpsStarshipFreighterIcon;
//# sourceMappingURL=ips-starship-freighter.js.map