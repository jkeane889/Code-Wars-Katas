/*

You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
If the article is not in the catalog return "Nothing".

*/


function catalog(s, article) {
  var raw_cata_strs = []
  var s_arr = s.split("<prod>");
  for (var i = 0; i < s_arr.length; i++) {
    if (s_arr[i].includes(article)) {
      raw_cata_strs.push(s_arr[i]);
    };
  };

  if (raw_cata_strs.length === 0) {
    return 'Nothing'
  };

  var catalog_strings = []

  raw_cata_strs.forEach(function(element) {
    var cata_str = ""

    var n_sl_1 = element.indexOf("name")
    var name_slice_1 = n_sl_1 + 5
    var name_slice_2 = element.lastIndexOf("</name")
    var article_name = element.slice(name_slice_1, name_slice_2)

    var p_sl_1 = element.indexOf("prx")
    var price_slice_1 = p_sl_1 + 4
    var price_slice_2 = element.lastIndexOf("</prx")
    var price = element.slice(price_slice_1, price_slice_2)

    var q_sl_1 = element.indexOf("qty")
    var qty_slice_1 = q_sl_1 + 4
    var qty_slice_2 = element.lastIndexOf("</qty")
    var quantity = element.slice(qty_slice_1, qty_slice_2)

    cata_str += article_name + ' > prx:' + ' $' + price + ' qty: ' + quantity

    catalog_strings.push(cata_str);
  });

  return catalog_strings.join("\r\n")
};
