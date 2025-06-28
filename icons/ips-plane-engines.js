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
export const IpsPlaneEnginesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-plane-engines ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-plane-engines" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M576 256c0-35-59.5-64-93.7-64l-116.6 0-37.2-65.1C342 123.1 352 110.7 352 96c0-17.7-14.3-32-32-32l-27.4 0L265.2 16.1C259.5 6.2 248.9 0 237.4 0L181.2 0c-10.6 0-18.3 10.2-15.4 20.4l49 171.6L112 192 68.8 134.4c-3-4-7.8-6.4-12.8-6.4l-42 0c-7.8 0-14 6.3-14 14c0 1.3 .2 2.6 .5 3.9l22.7 79.3C9.8 229 0 241.4 0 256s9.8 27 23.2 30.8L.5 366.1c-.4 1.3-.5 2.6-.5 3.9c0 7.8 6.3 14 14 14l42 0c5 0 9.8-2.4 12.8-6.4L112 320l102.9 0-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4l56.2 0c11.5 0 22.1-6.2 27.8-16.1L292.6 448l27.4 0c17.7 0 32-14.3 32-32c0-14.7-10-27.1-23.5-30.9L365.7 320l116.6 0c34.2 0 93.7-28 93.7-64z" })] })));
};
export default IpsPlaneEnginesIcon;
//# sourceMappingURL=ips-plane-engines.js.map