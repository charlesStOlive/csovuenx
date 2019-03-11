<template>
	<div>
		<div class="primary pos-relative white--text pt-4">
			<h5 class="mb-0 text-center">Charles Saint Olive</h5>
		</div>
			<div  class="author-detail-wrap">
				<div class="author-avatar primary pos-relative mb-5">
					<div class="avatar-img">
						<img src="/avatar/moije.jpg" width="87" height="87" class="img-responsive mx-auto rounded-circle">
					</div>
				</div>
				<div class="pa-3 authors-info">
					<h5>Charles Saint Olive</h5>
					<ul class="list-unstyled author-contact-info mb-2">
						<li>
							<span class="mr-3"><i class="zmdi zmdi-phone-msg"></i></span>
							<a href="tel:123456" class="fs-12 grey--text">06 66 66 66 66</a>
						</li>
						<li>
							<span class="mr-3"><i class="zmdi zmdi-email"></i></span>
							<a href="mailto:joan_parisian@gmail.com" class="fs-12 grey--text">charles@charles.com</a>
						</li>
						<li>
							<span class="mr-3"><i class="zmdi zmdi-pin"></i></span>
							<span class="fs-12 grey--text">12 chemin de la passerelle</span>
						</li>
					</ul>
					<!-- <ul class="d-custom-flex social-info list-unstyled">
						<li><a class="facebook" :href="author.socialLinks.facebookUrl"><i class="zmdi zmdi-facebook-box"></i></a></li>
						<li><a class="twitter" :href="author.socialLinks.twitterUrl"><i class="zmdi zmdi-twitter-box"></i></a></li>
						<li><a class="linkedin" :href="author.socialLinks.linkedinUrl"><i class="zmdi zmdi-linkedin-box"></i></a></li>
						<li><a class="instagram" :href="author.socialLinks.instagramUrl"><i class="zmdi zmdi-instagram"></i></a></li>
					</ul> -->
				</div>
				<!-- <ul class="d-custom-flex list-unstyled footer-content text-center w-100 border-top-1">
					<li>
						<h5 class="mb-0">{{author.metaDetails.articles}}</h5>
						<span class="fs-12 grey--text">Articles</span>
					</li>
					<li>
						<h5 class="mb-0">{{author.metaDetails.followers}}</h5>
						<span class="fs-12 grey--text">Followers</span>
					</li>
					<li>
						<h5 class="mb-0">{{author.metaDetails.likes}}</h5>
						<span class="fs-12 grey--text">Likes</span>
					</li>
				</ul> -->
			</div>
	</div>
</template>

<script>
	// import Slick from "vue-slick";
	// import api from "Api";
	
	export default {
		components: {
		},
		computed: {
		},
		mounted() {
		},
		methods: {
		},
		data() {
			return {
				authors: null
			};
		}
	};
</script>
