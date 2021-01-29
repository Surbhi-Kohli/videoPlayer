// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme ,{shallow} from'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()});
const setup=()=>shallow(<App/>)
const findByTestAttr=(wrapper,val)=>wrapper.find(`[data-test='${val}']`);

test("renders without error",()=>{
  const wrapper=setup();
    const appComponent=findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1)
})
test("renders the video",()=>{
  const wrapper=shallow(<App/>);
  const appComponent=findByTestAttr(wrapper,'component-video')
  expect(appComponent.length).toBe(1)
})

test("renders the video",()=>{})



test("progress of video changes rpm",()=>{})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
