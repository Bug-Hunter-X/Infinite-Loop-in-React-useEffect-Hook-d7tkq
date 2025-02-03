```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here. This will lead to an infinite loop.
    setCount(count + 1);
  }, [count]); // count is always changing and this causes a problem 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```