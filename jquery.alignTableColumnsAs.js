/*! jquery.alignTableColumnsAs - v0.1
* http://github.com/hazg/jquery.alignTableColumnsAs
* Copyright (c) 2013 Greg Franko; Licensed MIT*/


jQuery(function(){
  jQuery.fn.alignColumnsAs = function(sample) {

    target_rows = this.find('tr');
    sample_row = jQuery(sample).find('tr').first();
    sample_columns_num = sample_row.find('td, th').size()
    
    // Check sample table compatibility
    if(!sample_row.find('[colspan]').empty()){ throw('no colspan allowed in sample table'); }

    /*if(sample_row.find('td, th').size() != target_rows.first().find('td, th').size()){
      throw('columns number must be equal');
    }*/


    // Store columns widths
    widths = [] 
    sample_row.find('td, th').each(function(i, v){
      widths.push(jQuery(v).innerWidth())
    });

    // Generate fake row
    fake_row = '';
    for(i = 0; i < sample_columns_num; i++){  
      fake_row += '<td style="margin:0px;padding:0px;width:'+widths[i]+'px">1</td>';
    }
    
    
    // TODO: Display none
    this.find('.aca-sync-row').remove()
    this.prepend('<tr style="display:none;" class="aca-sync-row">'+fake_row+'</tr>');

  };
});
