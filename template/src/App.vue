<template>
  <v-app style="background-color:#e0e0e0 !important">
   
    <v-navigation-drawer style="background-color:#fff"  persistent  :mini-variant.sync="mini"  :clipped="clipped" v-model="drawer" disable-resize-watcher fixed app >


    <div style="width:300px; height: 200px ">
      <img style="width:100%; height: 200px;" src="./assets/img/fond5.jpg">    
    </div>

    <v-list style=" ; margin-top:-56px; ">
      <v-list-group >
        <v-list-tile slot="activator">
          <v-list-tile-action>
               <v-list-tile-avatar>
          <img  src="https://randomuser.me/api/portraits/men/85.jpg" >
        </v-list-tile-avatar>
            </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 16px !important; color:#fff">John Doe</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.native.stop="dialog = true" style="background-color:#0097c1">
          <v-list-tile-action>
            <v-icon  style="color:#fff">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style=" color:#fff">paramètre</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="" style="background-color:#0097c1">
          <v-list-tile-action>
            <v-icon  style="color:#fff">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style=" color:#fff">mon compte</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="" style="background-color:#0097c1">
          <v-list-tile-action>
            <v-icon  style="color:#fff">lock_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style=" color:#fff">log out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
       <v-list>
          <v-list-tile avatar v-for="item in items" :key="item.title" router :to="item.link" @click="">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">\{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>\{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
   
    <v-toolbar color="primary" dark  app :clipped-left="clipped">
       <v-toolbar-side-icon  id="burger1"  @click.stop="mini = !mini"></v-toolbar-side-icon> 
       <v-toolbar-side-icon id="burger2"  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title > <a href="home"><img  style="width:50%;margin-top:10px" src="./assets/img/logoEngie.png"></a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field light prepend-icon="search" solo append-icon="cancel" hide-details single-line></v-text-field>
    </v-toolbar>
    
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import toolbar from "../src/components/toolbar";
export default {
  components: {
    toolbar
  },

  data() {
    return {
      dialog: false,
      clipped: false,
      drawer: true,
      mini: true,
      fixed: false,
      miniVariant: false,
      items: [
        { icon: "home", title: "vue 1", link: "../pageun" },
        { icon: "room", title: "vue 2", link: "../pagedeux" },
        { icon: "shop", title: "vue 3", link: "../pagetrois" }
      ]
    };
  },
  name: "App"
};
</script>

<style>
.list__tile:hover,
.list__tile:active {
  color: #ff9800 !important;
}

.roundicon {
  background-color: #0097c1 !important;
  color: white !important;
  border-radius: 50px !important;
  padding: 3px;
}

.soustitre {
  font-size: 18px;
}
@media screen and (max-width: 768px) {
  #burger1 {
    display: none;
  }
  #burger2 {
    display: block;
  }
  .navigation-drawer--open {
    width: 300px !important;
  }
  .list__tile__content {
    opacity: 1 !important;
  }
}

@media screen and (min-width: 769px) {
  #burger1 {
    display: block;
  }
  #burger2 {
    display: none;
  }
}

table.table tbody td:first-child,
table.table tbody td:not(:first-child),
table.table tbody th:first-child,
table.table tbody th:not(:first-child),
table.table thead td:first-child,
table.table thead td:not(:first-child),
table.table thead th:first-child,
table.table thead th:not(:first-child) {
  padding: 0 14px !important;
}
</style>


