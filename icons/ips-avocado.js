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
export const IpsAvocadoIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-avocado ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-avocado" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M459.4 255.3c-18.5 15.2-33.5 35.6-38.1 59.1c-10.2 51.9-34 104.5-66.3 136.7c-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c32.3-32.3 84.9-56.1 136.7-66.3c23.5-4.6 43.9-19.6 59.1-38.1C283.1 20.5 323.2 0 368 0c79.5 0 144 64.5 144 144c0 44.8-20.5 84.9-52.6 111.3zM283.2 347.2c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4s-49.1 102.1-16.4 134.8s93 25.3 134.8-16.4z" })] })));
};
export default IpsAvocadoIcon;
//# sourceMappingURL=ips-avocado.js.map