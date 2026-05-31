// Đóng/Mở menu trên giao diện điện thoại.
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
    // Thêm hoặc xóa hamburger để ẩn/hiện menu.
    navbar.classList.toggle("active");
});
// Hiển thị thông báo khi nhấn nút mua hàng.
function addToCart() {
    alert("Cảm ơn bạn! Sản phẩm đã được thêm vào giỏ hàng thành công.");
}
function searchProduct() {
    var key = document.getElementById("searchInput").value;
    if (key.trim() === "") {
        alert("Nhập tên giày muốn tìm!");
    } 
    else {
        alert("Đang tìm đôi giày: " + key);
    }
}
// MỤC BLOG:
// Kho dữ liệu chứa bài viết chi tiết.
const blogData = {
    1: {
        title: 'Bí kíp "hồi sinh" giày sneaker trắng bị ố vàng trong 5 phút',
        date: 'Ngày 17 tháng 05, 2026 | Tác giả: Hieu Store',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80',
        content: `
            <p>Giày sneaker trắng luôn là món phụ kiện không thể thiếu trong tủ đồ của bất kỳ ai nhờ tính năng động và dễ phối đồ. Tuy nhiên, vết ố vàng đáng ghét luôn là nỗi ám ảnh sau một thời gian sử dụng hoặc đem phơi không đúng cách.</p>
            <h4>Bước 1: Chuẩn bị hỗn hợp làm sạch thần thánh</h4>
            <p>Trộn đều hỗn hợp gồm 1 muỗng canh baking soda và 1 muỗng canh kem đánh răng trắng (không dùng loại gel màu). Nhờ tính tẩy nhẹ an toàn, hỗn hợp này sẽ đánh bay các vết bẩn cứng đầu trên bề mặt vải vải dệt hoặc da mà không làm xơ chỉ.</p>
            <h4>Bước 2: Chà nhẹ nhàng bằng bàn chải cũ</h4>
            <p>Dùng bàn chải đánh răng cũ nhúng vào hỗn hợp, chà nhẹ nhàng theo vòng tròn lên các khu vực bị ố vàng trong vòng 3-5 phút. Để nguyên lớp bọt đó trên giày khoảng 10 phút trước khi xả lại bằng nước ấm.</p>
            <h4>Bước 3: Mẹo phơi giày bằng giấy ăn (Quyết định thành bại)</h4>
            <p>Đây là mẹo xương máu của dân chơi giày! Sau khi giặt xong, bạn dùng khăn giấy trắng quấn bọc kín toàn bộ đôi giày từ trong ra ngoài khoảng 2-3 lớp. Khi phơi ở nơi thoáng mát, các chất ố vàng còn sót lại sẽ bị hút hết vào lớp giấy ăn. Khi giày khô hoàn toàn, bạn gỡ giấy ra sẽ thấy đôi giày trắng sáng như mới!</p>
        `
    },
    2: {
        title: 'Mẹo đo size chân chuẩn 100% khi mua giày online',
        date: 'Ngày 15 tháng 05, 2026 | Tác giả: Chuyên gia Giày',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80',
        content: `
            <p>Mất thời gian đổi trả do mua nhầm size giày là tình huống cực kỳ phiền phức khi mua sắm trực tuyến. Mỗi hãng giày như Nike, Adidas hay Vans đều có phom chuẩn riêng lẻ. Để chọn được đôi giày vừa vặn tuyệt đối tại Hieu Store, bạn hãy làm theo các bước sau:</p>
            <h4>Các bước đo kích thước bàn chân tại nhà:</h4>
            <ul>
                <li><strong>Bước 1:</strong> Đặt một tờ giấy A4 sát vào bức tường. Đặt bàn chân của bạn lên tờ giấy sao cho gót chân chạm nhẹ vào tường.</li>
                <li><strong>Bước 2:</strong> Dùng bút chì vạch một đường thẳng tại điểm cao nhất của ngón chân (thường là ngón cái hoặc ngón trỏ).</li>
                <li><strong>Bước 3:</strong> Dùng thước kẻ đo khoảng cách thẳng hàng từ gót chân đến vạch mực vừa vẽ. Đó chính là chiều dài bàn chân của bạn (tính bằng cm).</li>
            </ul>
            <h4>Bảng quy đổi size giày thông dụng:</h4>
            <p>- Chiều dài chân từ 22.5cm - 23cm: Chọn Size 37<br>
               - Chiều dài chân từ 23.5cm - 24cm: Chọn Size 38<br>
               - Chiều dài chân từ 24.5cm - 25cm: Chọn Size 39/40<br>
               - Chiều dài chân từ 25.5cm - 26cm: Chọn Size 41/42</p>
            <p><em>*Lưu ý: Nếu mu bàn chân của bạn dày hoặc bề ngang chân bè to, hãy chủ động tăng thêm 0.5 đến 1 size (Up-size) để khi di chuyển không bị đau kích ngón chân nhé!</em></p>
        `
    },
    3: {
        title: 'Top 5 cách phối đồ cực hack dáng với giày Chunky',
        date: 'Ngày 12 tháng 05, 2026 | Tác giả: Stylist Số 1 Việt Nam',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        content: `
            <p>Những đôi giày Chunky Sneaker với thiết kế hầm hố, phần đế cao từ 5-7cm đang là "vũ khí bí mật" giúp các bạn trẻ ăn gian chiều cao cực đỉnh. Tuy nhiên, nếu không khéo léo phối đồ, đôi giày to bản này có thể khiến tổng thể trang phục của bạn trông nặng nề và mất cân đối.</p>
            <h4>1. Phối giày Chunky với quần Jean ống rộng (Streetwear Style)</h4>
            <p>Đây là công thức kinh điển của các tín đồ thời trang đường phố. Chiếc quần jean ống rộng che bớt một phần thân giày sẽ tạo ra sự hài hòa, làm đôi chân trông dài hơn và che khuyết điểm bắp chân to cực kỳ hiệu quả.</p>
            <h4>2. Kết hợp cùng chân váy Tennis ngắn cho các bạn nữ</h4>
            <p>Sự tương phản giữa nét hầm hố của đôi giày Chunky và sự năng động, dễ thương của chân váy chữ A tạo nên một tổng thể vô cùng thu hút. Đừng quên mang thêm một đôi tất trắng cao cổ qua mắt cá chân để tạo điểm nhấn thời thượng nhé.</p>
            <h4>3. Phong cách thể thao năng động với quần Jogger và áo Hoodie</h4>
            <p>Vào những ngày lười lên đồ, một set đồ thể thao nỉ form rộng đi kèm đôi Chunky Sneaker màu basic (trắng hoặc xám) tại Minh Luân Store là đủ để bạn tự tin bước xuống phố dạo phố hay đi cà phê cùng bạn bè mà vẫn chuẩn gu ăn mặc.</p>
        `
    }
};
// Hàm mở cửa sổ bài viết chi tiết.
function openBlog(id) {
    const post = blogData[id];
    if (post) {
        const htmlContent = `
            <div class="article-detail">
                <h2>${post.title}</h2>
                <div class="article-meta">${post.date}</div>
                <img src="${post.image}" alt="${post.title}">
                <div class="article-body-text">
                    ${post.content}
                </div>
            </div>
        `;
        document.getElementById('modalBody').innerHTML = htmlContent;
        document.getElementById('blogModal').style.display = 'flex'; // Hiện hộp thoại dạng flex
        document.body.style.overflow = 'hidden'; // Khóa thanh cuộn trang web chính lại
    }
}
// Hàm đóng cửa sổ bài viết.
function closeBlog() {
    document.getElementById('blogModal').style.display = 'none'; // Ẩn hộp thoại.
    document.body.style.overflow = 'auto'; // Mở lại thanh cuộn trang web chính.
}
// Đóng cửa sổ nếu người dùng bấm trượt ra ngoài vùng hộp trắng.
window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target == modal) {
        closeBlog();
    }
}
