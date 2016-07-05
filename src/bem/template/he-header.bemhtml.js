block('template-header-he').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											block: 'header-top-menu',
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'calculator' },
																			content : ''
																		},
																		'מחשבון'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'molecule' },
																			content : ''
																		},
																		'הזמן סים'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'money' },
																			content : ''
																		},
																		'טעינת כרטיס'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'user' },
																			content : ''
																		},
																		'אזור אישי'
																	]
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
									elem: 'layout-right',
									content: [
										{
											block: 'header-lang',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'RU'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'EN'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'HE'
																}
															]
														}
													]
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'header-logo',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/header/logo.png' }
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-navigation',
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
																	content: 'אודות'
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
																	content: 'מוצרים'
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
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});