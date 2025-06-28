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
export const IpbMintbitIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon brands-icon ipb-mintbit ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-mintbit" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M73.2 512V438.9H365.7V365.7h73.2V219.4H512V0H292.6V73.1H146.3v73.2H73.2V438.9H0V512H73.2zm73.1-219.4h73.2v73.1H146.3V292.6zm73.2-73.1h73.1v73.1H219.4V219.4zm73.1 0V146.3h73.2v73.1H292.6zM365.7 73.1h73.2v73.2H365.7V73.1z" })] })));
};
export default IpbMintbitIcon;
//# sourceMappingURL=ipb-mintbit.js.map