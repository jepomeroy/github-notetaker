import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("profile/:username", "routes/profile.tsx"),
    ]),
] satisfies RouteConfig;
