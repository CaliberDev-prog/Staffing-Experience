// Review System for Caliber Portfolio
// Uses localStorage for data persistence

const STORAGE_KEY = 'caliber_reviews';
const ADMIN_PASSWORD = 'admin123'; // CHANGE THIS PASSWORD!
let isAdminMode = false;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initStarRating();
    initReviewForm();
    initAdminPanel();
    displayReviews();
});

// Star Rating System
function initStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingValue');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);
            ratingInput.value = selectedRating;
            updateStars(selectedRating);
        });

        star.addEventListener('mouseenter', () => {
            const hoverRating = parseInt(star.dataset.rating);
            updateStars(hoverRating);
        });
    });

    document.getElementById('starRating').addEventListener('mouseleave', () => {
        updateStars(selectedRating);
    });

    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
}

// Review Form Submission
function initReviewForm() {
    const form = document.getElementById('reviewForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('reviewerName').value.trim();
        const position = document.getElementById('reviewerPosition').value.trim();
        const rating = parseInt(document.getElementById('ratingValue').value);
        const text = document.getElementById('reviewText').value.trim();

        // Validation
        if (!name || !text) {
            alert('Please fill in all required fields');
            return;
        }

        if (rating === 0) {
            alert('Please select a rating');
            return;
        }

        // Create review object
        const review = {
            id: Date.now(),
            name: name,
            position: position || '',
            rating: rating,
            text: text,
            date: new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })
        };

        // Save review
        saveReview(review);

        // Reset form
        form.reset();
        document.getElementById('ratingValue').value = 0;
        document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));

        // Show success message
        alert('Thank you for your review!');

        // Refresh display
        displayReviews();

        // Scroll to reviews
        document.getElementById('reviewsList').scrollIntoView({ behavior: 'smooth' });
    });
}

// Save review to localStorage
function saveReview(review) {
    const reviews = getReviews();
    reviews.unshift(review); // Add to beginning of array
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

// Get all reviews from localStorage
function getReviews() {
    const reviews = localStorage.getItem(STORAGE_KEY);
    return reviews ? JSON.parse(reviews) : [];
}

// Delete review
function deleteReview(reviewId) {
    if (!confirm('Are you sure you want to delete this review?')) {
        return;
    }

    const reviews = getReviews();
    const filteredReviews = reviews.filter(review => review.id !== reviewId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredReviews));
    displayReviews();
}

// Display all reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = getReviews();

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to leave a review!</p>';
        return;
    }

    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-card ${isAdminMode ? 'admin-mode' : ''}" data-review-id="${review.id}">
            <div class="review-header">
                <div class="review-author">
                    <div class="review-author-name">${escapeHtml(review.name)}</div>
                    ${review.position ? `<div class="review-author-position">${escapeHtml(review.position)}</div>` : ''}
                </div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
            <p class="review-text">${escapeHtml(review.text)}</p>
            <div class="review-footer">
                <span class="review-date">${review.date}</span>
                <button class="delete-review-btn" onclick="deleteReview(${review.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Admin Panel
function initAdminPanel() {
    const toggleBtn = document.getElementById('adminToggleBtn');
    const panel = document.getElementById('adminPanel');
    const loginBtn = document.getElementById('adminLoginBtn');
    const passwordInput = document.getElementById('adminPassword');

    toggleBtn.addEventListener('click', () => {
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }
    });

    loginBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === ADMIN_PASSWORD) {
            isAdminMode = true;
            document.getElementById('adminContent').style.display = 'block';
            document.querySelector('.admin-auth').style.display = 'none';
            displayReviews();
            alert('Admin mode activated!');
        } else {
            alert('Incorrect password');
            passwordInput.value = '';
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}

// Utility function to escape HTML and prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
