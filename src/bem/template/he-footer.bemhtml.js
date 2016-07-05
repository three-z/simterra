block('template-footer-he').replace()(function() {
	return [
		{
			block : 'bottom',
			content : [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block : 'bottom-time',
									content : [
										{
											elem : 'days',
											content : [
												{
													tag : 'ul',
													content: [
														{
															tag : 'li',
															content: 'א'
														},
														{
															tag : 'li',
															content: 'ב'
														},
														{
															tag : 'li',
															content: 'ג'
														},
														{
															tag : 'li',
															content: 'ד'
														},
														{
															tag : 'li',
															content: 'ה'
														},
														{
															tag : 'li',
															content: 'ו'
														},
														{
															tag : 'li',
															content: 'ש'
														}
													]
												}
											]
										},
										{
											elem : 'time',
											content : 'מסביב לשעון'
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block : 'bottom-phones',
									content : [
										{
											tag : 'ul',
											content: [
												{
													tag : 'li',
													content: '+7 (888) - 55-70-240'
												},
												{
													tag : 'li',
													content: '+7 (888) - 53-74-242'
												}
											]
										}
									]
								},
								{
									block : 'bottom-contacts',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'קשר'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'footer-logo',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: [
										{
											tag: 'img',
											attrs: { src: 'img/footer/logo.png' }
										}
									]
								}
							]
						},
						{
							block: 'footer-navigation',
							content: [
								{
									elem: 'list',
									tag : 'ul',
									content: [
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'ראשי'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'הנחות ומבצעים'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'עזרה'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'צור קשר'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'אזור אישי'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'טעינת כרטיס'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'הזמן סים'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'מחשבון'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'footer-copyright',
							content: '2015- 2016 All rights SimTerra reserved - חברת פיתוח - <a href="#">Leeft</a>'
						}
					]
				}
			]
		}
	];
});