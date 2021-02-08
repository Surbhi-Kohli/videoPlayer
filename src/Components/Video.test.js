import Video from "./Video.js";
import {shallow} from'enzyme';
////import EnzymeAdapter from 'enzyme-adapter-react-16';

//Enzyme.configure({adapter:new EnzymeAdapter()});
const setup=()=>shallow(<Video/>)
const findByTestAttr=(wrapper,val)=>wrapper.find(`[data-test='${val}']`);

test("renders without error",()=>{
    const wrapper=setup();
      const appComponent=findByTestAttr(wrapper,'tag-video')
    expect(appComponent.length).toBe(1)
  })
  // test("rpm starts at 0",()=>{
  //     const wrapper=setup();
  //     const rpm=findByTestAttr(wrapper,'rpm').text();
  //     expect(rpm).toBe("0"); 
  // })
  test("progress width changes on time update",()=>{
      const wrapper=setup();
      const progress=findByTestAttr(wrapper,'progress');
      progress.simulate('click');

      const rpm=findByTestAttr(wrapper,'rpm').text();
       expect(rpm).toBe("1500rpm");
  })