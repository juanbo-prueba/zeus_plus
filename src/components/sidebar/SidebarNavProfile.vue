<template>
	<ul class="nav">
		<li class="nav-profile">
			<a href="javascript:;" v-on:click="expand()">
				<div class="cover with-shadow"></div>
				<div class="image image-icon bg-black text-grey-darker">
					<i class="fa fa-user"></i>
				</div>
				<div class="info">
					<b class="caret pull-right"></b>
					{{datosUsuario.usuario.name}}
					<small>Front end developer</small>
				</div>
			</a>
		</li>
		<li>
			<ul class="nav nav-profile" v-bind:class="{ 'd-block': this.stat == 'expand' && !this.pageOptions.pageSidebarMinified, 'd-none': this.stat == 'collapse' }">
				<li><a href="javascript:;"><i class="fa fa-cog"></i> Settings</a></li>
				<li><a href="javascript:;"><i class="fa fa-pencil-alt"></i> Send Feedback</a></li>
				<li><a href="javascript:;"><i class="fa fa-question-circle"></i> Helps</a></li>
			</ul>
		</li>
	</ul>
</template>

<script>
	import { mapState } from 'vuex';
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'SidebarNavProfile',
	data() {
		return {
			stat: '',
			pageOptions: PageOptions
		}
	},
	methods: {
		expand: function() {
			this.stat = (this.stat == 'expand') ? 'collapse' : 'expand'
		},

  },
	computed: {
		...mapState('authModule', ['datosUsuario']),
	}
}
</script>
