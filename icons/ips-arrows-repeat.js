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
export const IpsArrowsRepeatIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-arrows-repeat ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-arrows-repeat" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M1.6 213.9c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2C77.1 189.9 118.5 160 165.2 160l173.6 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 165.2 96C91 96 25.1 143.5 1.6 213.9zm508.7 84.2c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2C434.9 322.1 393.5 352 346.8 352l-173.6 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L173.3 416l173.6 0c74.2 0 140.1-47.5 163.6-117.9z" })] })));
};
export default IpsArrowsRepeatIcon;
//# sourceMappingURL=ips-arrows-repeat.js.map