<template>
	<!-- begin sidebar nav -->
	<ul class="nav" v-if="menuUsuario">
		<li class="nav-header">Navigation</li>
		<template v-for="menu in menuUsuario">
			<sidebar-nav-list 
				ref="sidebarNavList" 
				v-bind:menu="menu" 
				v-bind:scrollTop="scrollTop" 
				v-bind:key="menu.path" 
				v-bind:status="menu.status" 
				v-on:collapse-other="handleCollapseOther(menu)"
				v-on:showFloatSubmenu="handleShowFloatSubmenu"
				v-on:hideFloatSubmenu="handleHideFloatSubmenu"></sidebar-nav-list>
		</template>
		<!-- begin sidebar minify button -->
		<li><a href="javascript:;" class="sidebar-minify-btn" v-on:click="handleSidebarMinify()"><i class="fa fa-angle-double-left"></i></a></li>
		<!-- end sidebar minify button -->
	</ul>
	<!-- end sidebar nav -->
</template>

<script>

import { mapState } from 'vuex';
//import SidebarMenu from './SidebarMenu.vue'
import SidebarNavList from './SidebarNavList.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'SidebarNav',
	props: ['scrollTop'],
	components: {
		SidebarNavList
	},
	data () {
		return { 
		//	menus: SidebarMenu,
			pageOptions: PageOptions
		}
	},
	methods: {
		handleShowFloatSubmenu: function(menu, offset) {
			this.$emit('showFloatSubmenu', menu, offset);
		},
		handleHideFloatSubmenu: function() {
			this.$emit('hideFloatSubmenu');
		},
		handleCollapseOther: function(menu) {
			for (var i = 0; i < this.menuUsuario.length; i++) {
				this.$refs.sidebarNavList[i].collapse(menu);
			}
		},
		handleSidebarMinify: function() {
			this.pageOptions.pageSidebarMinified = !this.pageOptions.pageSidebarMinified;
		}
	},
	computed: {
		...mapState('authModule', ['menuUsuario']),
	}
}
</script>
