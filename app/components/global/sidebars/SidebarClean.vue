<template lang="pug">
  nav#sidebar.sticky-top.overflow-auto.hidden

    user-sidebar-profile-card

    ul.list-unstyled
      p.mb-1.pb-1.font-weight-normal CONTENIDO
        i.material-icons.float-right.aling-middle.vertical-align.px-2 widgets
      li: nuxt-link(tag='a', :to="{name: 'index'}" , data-toggle='collapse', aria-expanded='false') Home
        i.material-icons.float-left.aling-middle.vertical-align.px-2 home

</template>
<script>

import UserSidebarProfileCard from '@/components/global/cards/UserSidebarProfileCard.vue'
export default {
  components: {
    UserSidebarProfileCard
  },
  mounted() {

  },
  methods: {}
}
</script>
<style scoped>
/*
    DEMO STYLE
*/


a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
#sidebar {
  min-width: 300px;
  max-width: 300px;
  height: 100vh;
  min-height: 10vh;
  overflow: auto;
  /* background: #343a40; */
  background: #3a4249;
  /* background: rgb(28, 31, 48); */
  /*background: #7386D5;*/
  color: #fff;
  transition: all 0.2s;
  /*border-radius: 0px 0px 5px 2px;*/
  position:fixed;
  top: 0px;
  /* box-shadow: 2px -10px 18px rgb(18, 18, 18); */
  z-index:1.1;
}

#sidebar.hidden {
  margin-left: -300px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #343a40;
  /* background: #283259; */
  /*background: #6d7fcc;*/
}

#sidebar ul.components {
  padding: 20px 0;
  /* border-bottom: 1px solid #47748b; */
}

#sidebar ul p {
  color: #fff;
  /* color: #800040; */
  /* color: #7d2341; */
  /* color: #8c004b; */
  /* color: #841a1a; */
  /* color: #511010; */
  /* filter: blur(6px); */
  /* text-shadow: 0px 0px 10px #fff; */
  /* text-shadow: 0px 0px 10px #f6f6f6; */
  /* text-shadow: 0px 0px 10px #efede4; */
  /* text-shadow: 0px 0px 10px #dfdbc9; */
  /* text-shadow: 0px 1px 2px #915339; */
  /* text-shadow: -1px 0px 4px #841a1a; */
  /* text-shadow: 0px 0px 10px #faebd9; */
  /* text-shadow: 0px 0px 10px #511010; */
  /* text-shadow: 0px 0px 10px #000; */
  padding: 8px;
  font-size: 0.9em;
  font-weight: 500 !important;
}

#sidebar ul li a {
  padding: 5px;
  padding-left: 15px;
  font-size: 1.2em;
  display: block;
}

/* Para los iconos */
#sidebar ul li i {
  font-size: 1.2em;
  display: block;
}

#sidebar ul li a:hover {
  /* color: #7386D5; */
  /*color: #800040;*/
  color: #e9652c;
  background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
  color: #fff;
  background: #283259;
  /*background: #6d7fcc;*/
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
  /*background: #6d7fcc;*/
}

ul.list-unstyled {
  /* padding-top: 4px !important; */
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #283259;
  /*color: #7386D5;*/
}

a.article,
a.article:hover {
  background: #283259 !important;
  /*background: #6d7fcc !important;*/
  color: #fff !important;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
/*
@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
*/
</style>
