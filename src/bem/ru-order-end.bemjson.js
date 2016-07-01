({
	block: 'template-page',
	title: 'Заказать СИМ карту',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'order',
							content: [
								{
									block : 'order-steps',
									content : [
										{
											elem : 'list',
											content : [
												{
													elem : 'list-item',
													content : 'Выбери продукт'
												},
												{
													elem : 'list-item',
													content : 'Оформить заказ'
												},
												{
													elem : 'list-item',
													mods : { 'active' : true },
													content : 'Завершить заказ'
												}
											]
										},
									]
								},
								{
									block : 'order-end',
									content : [
										{
											tag : 'h2',
											content : 'Ваш заказ успешно завершен'
										},
										{
											tag : 'h3',
											content : 'Вы заказали'
										},
										{
											block : 'order-end-list',
											content : [
												{
													block : 'order-end-list-item',
													content : [
														{
															elem : 'price',
															content : 'Симкарта - 20 € ; На балансе - 10 €'
														}
													]
												}
											]
										},
										{
											tag : 'h3',
											content : 'Ваши персональные данные'
										},
										{
											block : 'order-end-personal',
											content : [
												{
													elem : 'confidentiality',
													content : '* Внимание! Мы соблюдаем политику конфиденциальности и не передадим ваши данные третьим лицам'
												},
												{
													elem : 'text',
													content : [
														'Ф.И.О.: <strong>Малышев Виктор Сергевич</strong><br>',
														'Мобильный телефон: <strong>+7 (753) 456-78-23</strong><br>',
														'Email: <strong>malyha@mail.ru</strong><br>',
														'№ удоставерения личности: <strong>123-456</strong><br>',
														'Адрес места жительства: <strong>163044, Россия, Архангельская область, г.Архангельск, Ул.Урицкого, д.17, кв.408</strong><br>'
													]
												}
											]
										},
										{
											tag : 'h3',
											content : 'ДОставка почтой на указанный адрес'
										},
										{
											block : 'order-end-delivery',
											content : [
												{
													elem : 'text',
													content : [
														'Адрес доставки: <strong>163044, Россия, Архангельская область, г.Архангельск, Ул.Урицкого, д.17, кв.408</strong><br>',
														'Стоимость доставки: <strong>10 €</strong><br>'
													]
												}
											]
										},
										{
											block : 'order-end-total',
											content : 'Сумма заказа: <strong>40 €</strong>'
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
})