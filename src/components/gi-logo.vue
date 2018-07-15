<template>
    <svg :style="size" version="1.1" id="Group_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 153 23.6" enable-background="new 0 0 153 23.6" xml:space="preserve">
<g id="new_Green_logo_3" transform="translate(1457 579)">
	<g id="Group-2" transform="translate(5 9)">
		<path id="חשבונית-ירוקה" fill="#18C746" d="M-1344.5-581l0,13.3h4.5v-10h1.1c1.8,0,2.1,0.8,2.1,2.8v7.2h4.5v-8
			c0-3.4-1-5.3-4.6-5.3H-1344.5z M-1350.6-581h4.1v6.6c0,4.6-2.3,6.7-6.5,6.7h-8.9l-1.2-13.3h4.3l0.9,10.3h3.7
			c2.2,0,3.6-0.5,3.6-3.4L-1350.6-581z M-1352.5-581v7.9h-3.9v-7.9H-1352.5z M-1363.8-571.1h-1.6v-9.9h-9.5v3.5h5v6.4h-5.1l0,3.5
			h11.1L-1363.8-571.1z M-1381.2-581v13.3h4.6V-581H-1381.2z M-1390.5-571.1v3.5h3.9c2.3,0,3.5-1,3.5-3.8v-9.5h-6.3v3.5h1.8v5
			c0,1.1-0.2,1.4-1.1,1.4L-1390.5-571.1z M-1396.4-581v7.9h4.6v-7.9H-1396.4z M-1410.7-581v3.5h1.4v6.4h-2.2v3.5h5.9v-10.1h1.2
			c1.7,0,1.9,0.9,1.9,2.5l0,7.7h4.4v-7.7c0-3.4-1-5.7-4.6-5.7H-1410.7z M-1420.2-581v6.9h2.4v-6.9H-1420.2z M-1430.9-581v1.9h4
			c1.9,0,2.3,1.9,2.3,3.9v7.6h2.3v-7.5c0-3.4-0.8-5.9-4.5-5.9L-1430.9-581z M-1435-581v13.3h2.4V-581H-1435z M-1448.5-581h11.1v6.7
			c0,5.1-2.2,6.6-6,6.6h-0.3v-1.7h0.2c2.6,0,3.8-0.6,3.8-5.2v-4.5h-8.8V-581z M-1448-564.4v-11.7h2.1v11.7L-1448-564.4z
			 M-1460.4-567.7v-7.3h2.3v7.3H-1460.4z M-1460.5-581h10.2v13.3h-2.3v-11.5h-8V-581z"/>
		<path id="Shape" fill="#18C746" d="M-1312.3-588c-2.9,1.5-8.9,1.8-12.9,6.8c-2.3,2.7-3.3,6.7-0.9,10.3c0.3,0.4,0.6,0.9,0.8,1.4
			c-0.8,1.5-0.8,1.6-1.4,2.9c-0.2,0.7,1.9,2.1,2.1,1.5c1.4-5,3.4-9.8,6-14.3c1.4-1.9,2.9-3.7,4.5-5.4c-3.6,5.2-6.3,11-8,17.1
			c0.9,0,1.8,0,2.6-0.2c3.3-0.6,6.2-2.8,7.6-5.9C-1309.9-578.1-1310.1-584.7-1312.3-588"/>
	</g>
</g>
</svg>

</template>

<script>
    export default {
        name: 'GiLogo',
        props: {
            height: {
                type: String,
				required: true
			},
			width: {
                type: String
			}
		},
        computed: {
            size() {
                let size = {}
                if (this.height) {
                    size.height = this.height + 'px'
                }

                if (this.width)
                    size.width = this.width + 'px'

                return size
            }
        }
    }
</script>

<style scoped>
    .cls-1 {
        clip-path: url(#clip-path);
    }

    path {
        fill: #fff;
    }
</style>