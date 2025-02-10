const getStoredBookApplication = () => {
    const storedBookApplication = localStorage.getItem('book-Applications');
    if (storedBookApplication) {
        return JSON.parse(storedBookApplication);
    }
    return [];
};

const saveBookApplication = (id) => {
    const storedBookApplication = getStoredBookApplication();
    const existingBook = storedBookApplication.find(bookId => bookId === id);
    if (!existingBook) {
        storedBookApplication.push(id);
        localStorage.setItem('book-Applications', JSON.stringify(storedBookApplication));
    }
};

export { getStoredBookApplication, saveBookApplication };
