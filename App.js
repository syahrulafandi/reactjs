import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Jeabede">
          <ComponentC />
        </UserProvider>
        {/* <Counter2 render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} /> */}
        {/* <Counter2 render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} /> */}
        {/* <ClickCounterTwo /> */}
        {/* <HoverCounterTwo /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Jeabede' : 'Guest'} /> */}
        {/* <HoverCounter /> */}
        {/* <ClickCounter name='Jeabede' /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Enriq" filmName="Rama">
          <p>This is childern props</p>
        </Greet>
        <Greet name="Syahrul" filmName="Cak Lul">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Qolbi" filmName="Atta" /> */}
        {/* <Welcome name="Enriq" filmName="Rama" /> */}
        {/* <Welcome name="Syahrul" filmName="Cak Lul" /> */}
        {/* <Welcome name="Qolbi" filmName="Atta" /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;