const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  app.get('/', (req, res) => {
    res.send('It is working.');
  });
});
