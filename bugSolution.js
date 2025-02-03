```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here, adding condition to prevent infinite loop
    let intervalId;
    if(count < 10) {
        intervalId = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
    }
    return () => clearInterval(intervalId); 
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```