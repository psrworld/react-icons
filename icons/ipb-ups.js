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
export const IpbUpsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon brands-icon ipb-ups ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-ups" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M103.2 303c-5.2 3.6-32.6 13.1-32.6-19V180H37.9v102.6c0 74.9 80.2 51.1 97.9 39V180h-32.6zM4 74.82v220.9c0 103.7 74.9 135.2 187.7 184.1 112.4-48.9 187.7-80.2 187.7-184.1V74.82c-116.3-61.6-281.8-49.6-375.4 0zm358.1 220.9c0 86.6-53.2 113.6-170.4 165.3-117.5-51.8-170.5-78.7-170.5-165.3v-126.4c102.3-93.8 231.6-100 340.9-89.8zm-209.6-107.4v212.8h32.7v-68.7c24.4 7.3 71.7-2.6 71.7-78.5 0-97.4-80.7-80.92-104.4-65.6zm32.7 117.3v-100.3c8.4-4.2 38.4-12.7 38.4 49.3 0 67.9-36.4 51.8-38.4 51zm79.1-86.4c.1 47.3 51.6 42.5 52.2 70.4.6 23.5-30.4 23-50.8 4.9v30.1c36.2 21.5 81.9 8.1 83.2-33.5 1.7-51.5-54.1-46.6-53.4-73.2.6-20.3 30.6-20.5 48.5-2.2v-28.4c-28.5-22-79.9-9.2-79.7 31.9z" })] })));
};
export default IpbUpsIcon;
//# sourceMappingURL=ipb-ups.js.map