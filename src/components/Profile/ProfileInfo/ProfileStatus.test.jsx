import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";


describe('ProfileStatus component', () => {
  test('status ', () => {
    const component = create(<ProfileStatus status={'it-samurai'}/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('it-samurai')
  });

  test('after creation span should dispalyed', () => {
    const component = create(<ProfileStatus status={'it-samurai'}/>);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test('after creation input should not be dispalyed', () => {
    const component = create(<ProfileStatus status={'it-samurai'}/>);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test('input', () => {
    const component = create(<ProfileStatus status={'it-samurai'}/>);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe('it-samurai')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status={'it-samurai'} updateStatusThunk={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1)
  })

})