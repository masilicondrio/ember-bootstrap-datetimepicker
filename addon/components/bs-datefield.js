import Ember from 'ember';
import DateTimePickerTextFieldMixin from 'ember-bootstrap-datetimepicker/mixins/datetimepicker_textfield';


var bsDateFieldComponent = Ember.TextField.extend(DateTimePickerTextFieldMixin,{
 classNames: ['form-control']
});

export default bsDateFieldComponent;
