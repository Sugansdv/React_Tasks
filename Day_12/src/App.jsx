import React from "react";
import ThemeProvider from "./Components/ThemeContext";
import ThemedButton from "./Components/ThemedButton";

import UserProvider from "./Components/UserContext";
import SiblingOne from "./Components/SiblingOne";
import SiblingTwo from "./Components/SiblingTwo";

import UserRoleDisplay from "./Components/UserRoleDisplay";
import CounterProvider from "./Components/CounterContext";
import CounterDisplay from "./Components/CounterDisplay";

import AuthProvider from "./Components/AuthContext";
import Child from "./Components/Child";

import LanguageProvider from "./Components/LanguageContext";
import LanguageSelector from "./Components/LanguageSelector";

import MultiContextComponent from "./Components/MultiContextComponent";

import SubscriptionProvider from "./Components/SubscriptionContext";
import SubscriptionContent from "./Components/SubscriptionContent";

import UserDataProvider from "./Components/UserDataContext";
import UserProfile from "./Components/UserProfile";

import UserAuthProvider from "./Components/UserAuthContext";
import AuthStatusDisplay from "./Components/AuthStatusDisplay";

import CounterProvider2 from "./Components/CounterContext2";
import CounterDisplay2 from "./Components/CounterDisplay2";
import CounterIncrementer2 from "./Components/CounterIncrementer2";

import LanguageSelectorProvider from "./Components/LanguageSelectorContext";
import LanguageSelectorDisplay from "./Components/LanguageSelectorDisplay";

import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <AuthProvider>
          <LanguageProvider>
            <SubscriptionProvider>
              <UserDataProvider>
                 <div className="header">
    <div className="header-left">Suganya S</div>
    <div className="header-right">Day 12 Task</div>
  </div>
                <div className="app-center">
                  
                  <h3> Task 2. Create Context: Create a simple context using
                    React.createContext(). </h3>
                    <h3>Task 3. Context Provider Example: Wrap a parent component with
                    the Context.Provider and pass a value. </h3>
                    <h3> Task 4. Access Context with useContext: Use the useContext hook
                    to access context values in a child component. </h3>
                  <h3>
                    Task 12. Theme Toggle using Context: Create a context that
                    provides a theme (Light or Dark) and allows toggling.
                  </h3>
                  <ThemedButton />

                  <UserProvider>
                    <div className="siblings-container">
                      <br />
                      <hr />
                      <h3>
                        Task 5. Multiple Components with Context: Access the
                        same context value in two sibling components.
                      </h3>
                      <hr />
                      <SiblingOne />
                      <SiblingTwo />
                    </div>
                  </UserProvider>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 6. Default Context Value: Create a context with a
                      default value and access it without a provider.
                    </h3>
                    <hr />
                    <UserRoleDisplay />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      7. Dynamic Context Value: Pass a dynamic value (like a
                      counter) to the context provider.
                    </h3>
                    <hr />
                    <CounterDisplay />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 8. Access context values from nested child
                      components.
                    </h3>
                    <hr />
                    <Child />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 9: Use useState to dynamically update the context
                      value from a child component.
                    </h3>
                    <hr />
                    <LanguageSelector />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 10. Multiple Contexts: Use two different contexts in
                      the same component.
                    </h3>
                    <hr />
                    <MultiContextComponent />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 11. Conditional Rendering with Context: Display
                      different content based on context values.
                    </h3>
                    <hr />
                    <SubscriptionContent />
                  </div>

                  <div>
                    <br />
                    <hr />
                    <h3>
                      Task 13. Fetch user data and share it across components
                      using context.
                    </h3>
                    <hr />
                    <UserProfile />
                  </div>
                  
                   <div className="proj-container">
                    <br />
                    <hr />
                    <h3>Mini Project 1: Theme Switcher</h3>
                    <hr />
                    <ThemedButton />
                  </div>

                  <UserAuthProvider>
                     <div className="proj-container">
                      <br />
                      <hr />
                      <h3>Mini Project 2: User Authentication</h3>
                      <hr />
                      <AuthStatusDisplay />
                    </div>
                  </UserAuthProvider>

                  <CounterProvider2>
                    <div className="proj-container">
                      <br />
                      <hr />
                      <h3>Mini Project 3: Counter with Context</h3>
                      <hr />
                      <CounterDisplay2 />
                      <CounterIncrementer2 />
                    </div>
                  </CounterProvider2>

                  <LanguageSelectorProvider>
                     <div className="proj-container">
                      <br />
                      <hr />
                      <h3>Mini Project 4: Language Selector</h3>
                      <hr />
                      <LanguageSelectorDisplay />
                    </div>
                  </LanguageSelectorProvider>
                </div>
              </UserDataProvider>
            </SubscriptionProvider>
          </LanguageProvider>
        </AuthProvider>
      </CounterProvider>
    </ThemeProvider>
  );
}
