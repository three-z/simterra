block('template-page').replace()(function() {
	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: { charset: 'utf-8' }
						},
						{
							tag: 'title',
							content: ''
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/normalize.css/normalize.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/slick.js/slick/slick.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/fancybox/source/jquery.fancybox.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/jquery.form-styler/jquery.formstyler.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/ionrangeslider/css/ion.rangeSlider.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/ionrangeslider/css/ion.rangeSlider.skinSimple.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'css/styles.css' }
						}
					]
				},
				{
					tag: 'body',
					content: [
						{
							block: 'page',
							mods: {
								homepage: this.ctx.homepage ? true : undefined
							},
							content: [
								{
									block: 'template-header'
								},
								{
									block : this.ctx.title ? 'page-title' : undefined,
									tag : this.ctx.title ? 'h1' : undefined,
									mix: { block: 'container' },
									content : this.ctx.title
								},
								this.ctx.content,
								{
									block: 'template-footer'
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery/dist/jquery.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/slick.js/slick/slick.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/fancybox/source/jquery.fancybox.pack.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/circular-carousel/jquery.circular-carousel.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery.form-styler/jquery.formstyler.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/ionrangeslider/js/ion.rangeSlider.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'js/scripts.js' }
						}
					]
				}
			]
		}
	];
});