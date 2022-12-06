import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/inicio.vue";
import meta from "../views/meta.vue";
import residencias from "../views/residencias.vue";
import instalaciones from "../views/instalaciones.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: inicio,
    },
    {
      path: "/meta",
      name: "meta",
      component: meta,
    },
    {
      path: "/residencias",
      name: "residencias",
      component: residencias,
    },
    {
      path: "/instalaciones",
      name: "instalaciones",
      component: instalaciones,
    },
    
  ],
});

export default router;
