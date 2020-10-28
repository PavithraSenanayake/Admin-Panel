import React from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ButtonGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Datetime from 'react-datetime';
import ColorPicker from 'rc-color-picker';
import MaskedInput from 'react-maskedinput';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import Dropzone from 'react-dropzone';
import TextareaAutosize from 'react-autosize-textarea';
import ReactMde, { ReactMdeCommands } from 'react-mde';
import Select from 'react-select';
import Widget from '../../../components/Widget/Widget';
import axios from 'axios';
import '../Challenges/dropdown.css';
import '../Challenges/fileupload.css';




//import s from './Elements.module.scss';

import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeTooltip = createSliderWithTooltip(Range);
class Rewards extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      service:'',
      discription:'',
      price:''   
      
      
    };
    this.changeService = this.changeService.bind(this);
    this.changeDiscription = this.changeDiscription.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.doSave = this.doSave.bind(this);
  }

  
  
  changeService = (e) => {
    this.setState({ service: e.target.value });
  }
  changeDiscription = (e) => {
    this.setState({ discription: e.target.value});
  }
  changePrice = (e) => {
    this.setState({ price: e.target.value});
  }

  doSave(e) {
    e.preventDefault();
    const obj = {
        service : this.state.service,
        discription: this.state.discription,
        price : this.state. price,
        
    };

    console.log(obj);

    axios.post('', obj)
    .then(res => {
        console.log(res.data);
        
    });


  

}

  

  valueFormatter = (v) => {
    return `${v}`;
  }
    render() {
        return (
            <div>
            <h1 className="page-title">Create  - <span className="fw-semi-bold">Challenges</span></h1>
          <Row>
         <Col lg={{size: 8, offset: 1}} xs={{size: 12, offset: 0}}>
         <Widget title={<h5> Enter Challange Details</h5>} close collapse>
       <br/>
       <Form onSubmit={this.onSubmit}>

       <FormGroup className="mt">
                                <Label for="role">Reward Type</Label>
                                <InputGroup className="input-group-no-border">
                                        
                                    <select name='barcode' id='barcode' onkeypress='validate(event, this);' required name="Type"className="dropdown" >
                                                <option value='' selected='selected' >Select Type</option>
                                                <option value='event'>Free Membership</option>
                                                <option value='mission'>Mission</option>

                                    </select>
                                    <input type='hidden' id='bc_entered' />
                                    </InputGroup>
                            </FormGroup>


       
         <FormGroup>
           <Label for="reward">Reward Name</Label>
           <Input type="reward" 
           name="reward" 
           id="reward" 
           placeholder="Reward Name" 
           
           />
         </FormGroup>
         

         <FormGroup>
           <Label for="organization">Organization</Label>
           <Input type="organization" 
           name="organization" id="organization" 
           placeholder="Enter organization" 
           
           />
         </FormGroup>

         <FormGroup>
           <Label for="validity">Validity</Label>
           <Input type="validity" 
           name="validity" id="validity" 
           />
         </FormGroup>

         <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>


         <FormGroup>
           <Label for="points">Required Points</Label>
           <Input type="points" 
           name="points" id="points" 
           
           />
         </FormGroup>
 
 
         <FormGroup>
           <Label for="exampleFile"  >Upload an Image</Label>
           <Input type="file" name="file" id="exampleFile" color="default" className="fileupload"
           style={{ cursor: 'pointer' }}
           onChange={this.onFileChange}
           />
         </FormGroup>
   
         <br/>
           
         <Button color="default" className="width-200 mb-xs mr-xs">Pick Location</Button>
         <Button color="default" className="width-100 mb-xs mr-xs" type="submit">Submit</Button>
         
       </Form>
       </Widget>
             </Col>
         </Row>
          </div>


            
            
        )
    }
}

export default Rewards










