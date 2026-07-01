(() => {
      // Data Simulation
      const users = [
        {
          id: "ana",
          username: "Ana",
          avatar:
            "https://tse2.mm.bing.net/th/id/OIP.9MwKrulKnQV_Q59cyDD06AHaFj?pid=Api&P=0&h=180",
          bio: "Gato atigrado adulto en busca de hogar",
          followers: 1250,
          following: 300,
          posts: [],
        },
        {
          id: "samuel",
          username: "samuel",
          avatar:
            "https://tse2.mm.bing.net/th/id/OIP.9MwKrulKnQV_Q59cyDD06AHaFj?pid=Api&P=0&h=180",
          bio: "Doberman albino adulto",
          followers: 1600,
          following: 200,
          posts: [],
        },
        {
          id: "luis",
          username: "Luis",
          avatar:
            "https://tse4.mm.bing.net/th/id/OIP.p-n_kKeIMp6eH59C_1D6qAHaE8?pid=Api&P=0&h=180",
          bio: "Gatito atigrado adulto",
          followers: 890,
          following: 415,
          posts: [],
        },
        {
          id: "carla",
          username: "Carla",
          avatar:
            "https://roedorespedia.com/imagenes/hamsters-rusos-blancos-1024x765.jpg",
          bio: "Hamster travieso ruso blanco",
          followers: 770,
          following: 220,
          posts: [],
        },
        {
          id: "pablo",
          username: "Pablo",
          avatar:
            "https://tse4.mm.bing.net/th/id/OIP.wrRm3x0Zytr0NnYH46EYCAHaE8?pid=Api&P=0&h=180",
          bio: "Pitbull frances bebe",
          followers: 1050,
          following: 380,
          posts: [],
        },
        {
          id: "maria",
          username: "Maria",
          avatar:
            "https://tse1.mm.bing.net/th/id/OIP.kWciBWJsMoxCdln96Gg6LQHaFj?pid=Api&P=0&h=180",
          bio: "Golden retriever juguetón",
          followers: 500,
          following: 125,
          posts: [],
        },
        {
          id: "marta",
          username: "Marta",
          avatar:
            "https://tse1.mm.bing.net/th/id/OIP.kWciBWJsMoxCdln96Gg6LQHaFj?pid=Api&P=0&h=180",
          bio: "Amante de los gatos y el café ☕🐱",
          followers: 500,
          following: 125,
          posts: [],
        },
      ];

      // Stories
      const stories = [
        {
          id: "story1",
          userId: "ana",
          image:
            "https://smylepets.com/wp-content/uploads/2022/02/gato-atigrado-maine-coon.jpg",
          viewedUsers: [],
          timestamp: Date.now() - 360000,
        },
        {
          id: "story2",
          userId: "luis",
          image:
            "https://cdn.pixabay.com/photo/2017/05/30/07/33/tabby-2356067_1280.jpg",
          viewedUsers: [],
          timestamp: Date.now() - 720000,
        },
        {
          id: "story3",
          userId: "carla",
          image:
            "https://roedorespedia.com/imagenes/hamster-ruso-de-invierno-o-blanco-768x576.jpeg",
          viewedUsers: [],
          timestamp: Date.now() - 1080000,
        },
        {
          id: "story4",
          userId: "pablo",
          image:
            "https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/bulldog-frances.jpg",
          viewedUsers: [],
          timestamp: Date.now() - 1440000,
        },
        {
          id: "story5",
          userId: "marta",
          image:
            "https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-556452601.jpg?resize=384",
          viewedUsers: [],
          timestamp: Date.now() - 1800000,
        },
      ];

      // Posts data
      let posts = [
        {
          id: "post1",
          userId: "ana",
          image:
            "https://misanimales.com/wp-content/uploads/2021/07/gato-comun-europeo-853x640.jpg",
          caption: "Gato atigrado Adulto #gatosatigrados",
          likes: 74,
          likedUsers: [],
          comments: [
            { id: "c1", userId: "luis", text: "¡Qué hermosa foto!" },
            { id: "c2", userId: "carla", text: "Me encantaría adoptarlo." },
          ],
          timestamp: Date.now() - 7200000,
        },
        {
          id: "post2",
          userId: "luis",
          image:
            "https://farm2.staticflickr.com/1348/1305062154_ced4e6de60_o.jpg",
          caption: "Gatico atrigrado adulto #gatosatigrados",
          likes: 68,
          likedUsers: [],
          comments: [
            { id: "c3", userId: "ana", text: "Precioso!" },
            { id: "c3", userId: "Manuel", text: "Divino!" },
            { id: "c3", userId: "Samuel", text: "Se ve serio!, quiero uno" },
            { id: "c4", userId: "marta", text: "Qué hermoso :) " },
          ],
          timestamp: Date.now() - 4800000,
        },
        {
          id: "post3",
          userId: "carla",
          image:
            "https://dehamster.net/wp-content/uploads/2018/07/hamster-ruso-limpio.jpg",
          caption: "Hamster Ruso bebe #HamsterBlanco",
          likes: 42,
          likedUsers: [],
          comments: [{ id: "c5", userId: "pablo", text: "Hermoso!" }],
          comments: [{ id: "c5", userId: "mateo", text: "Lo quiero!" }],
          comments: [{ id: "c5", userId: "maria", text: "Es hermosoo!" }],
          comments: [{ id: "c5", userId: "santiago", text: "Tan adorable!" }],
          timestamp: Date.now() - 3600000,
        },
      ];

      // Helper functions
      function findUserById(id) {
        return users.find((u) => u.id === id);
      }
      function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
      }
      // Date formatting: time ago in Spanish
      function timeAgo(ms) {
        const seconds = Math.floor((Date.now() - ms) / 1000);
        if (seconds < 60) return "Hace segundos";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
        const days = Math.floor(hours / 24);
        return `Hace ${days} día${days > 1 ? "s" : ""}`;
      }
      // Render stories
      const storiesList = document.getElementById("storiesList");
      function renderStories() {
        storiesList.innerHTML = "";
        stories.forEach((story, idx) => {
          const user = findUserById(story.userId);
          if (!user) return;
          const storyEl = document.createElement("div");
          storyEl.className = "story" + (story.viewedUsers.includes("currentUser") ? " watched" : "");
          storyEl.setAttribute("role", "listitem");
          storyEl.setAttribute("tabindex", "0");
          storyEl.setAttribute("aria-pressed", "false");
          storyEl.setAttribute("aria-label", `Ver historia de ${user.username}`);
          storyEl.dataset.index = idx;
          storyEl.dataset.username = user.username;
          storyEl.dataset.avatar = user.avatar;
          storyEl.dataset.image = story.image;
          storyEl.innerHTML = `
            <img src="${user.avatar}" alt="Avatar de usuario ${user.username}" />
            <p>${user.username}</p>
          `;
          // Click handler for showing story modal
          storyEl.addEventListener("click", () => openStoryModal(idx));
          storyEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openStoryModal(idx);
            }
          });
          storiesList.appendChild(storyEl);
        });
      }
      // Render posts feed
      const feed = document.getElementById("feed");
      function renderPosts() {
        feed.innerHTML = "";
        posts.forEach((post) => {
          const user = findUserById(post.userId);
          if (!user) return;
          const liked = post.likedUsers.includes("currentUser");
          const postEl = document.createElement("article");
          postEl.className = "post";
          postEl.setAttribute("tabindex", "0");
          postEl.setAttribute("aria-label", `Publicación de ${user.username}`);
          postEl.innerHTML = `
            <div class="post-header" tabindex="0" role="button" aria-label="Ver perfil de ${user.username}">
              <img src="${user.avatar}" alt="Avatar de ${user.username}" />
              <div class="username">${user.username}</div>
            </div>
            <div class="post-image" aria-label="Imagen de la publicación">
              <img src="${post.image}" alt="Foto de ${post.caption}" loading="lazy" />
            </div>
            <div class="post-actions">
              <button aria-label="Me gusta" class="like-button ${liked ? "liked" : ""}" title="Me gusta" aria-pressed="${liked}" type="button">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
              <button aria-label="Comentar" class="comment-button" title="Comentar" type="button">
                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>
            <div class="likes" aria-live="polite" aria-atomic="true">${post.likes} like${post.likes === 1 ? "" : "s"}</div>
            <div class="caption"><span class="username">${user.username}</span> ${escapeHtml(post.caption)}</div>
            <section class="comment-section" aria-label="Comentarios">
              <div class="comment-list" aria-live="polite" aria-atomic="true">${renderComments(post.comments)}</div>
              <form class="comment-input-container" aria-label="Agregar un comentario">
                <input class="comment-input" type="text" placeholder="Agrega un comentario..." aria-label="Comentario" autocomplete="off" />
                <button type="submit" class="comment-submit-btn">Publicar</button>
              </form>
            </section>
          `;
          // Add event listeners for post elements
          // Like button
          const likeButton = postEl.querySelector(".like-button");
          const likesCountEl = postEl.querySelector(".likes");
          likeButton.addEventListener("click", () => {
            if (likeButton.classList.contains("liked")) {
              // Unlike
              likeButton.classList.remove("liked");
              likeButton.setAttribute("aria-pressed", "false");
              post.likes--;
              const idx = post.likedUsers.indexOf("currentUser");
              if (idx > -1) post.likedUsers.splice(idx, 1);
            } else {
              likeButton.classList.add("liked");
              likeButton.setAttribute("aria-pressed", "true");
              post.likes++;
              post.likedUsers.push("currentUser");
            }
            likesCountEl.textContent = `${post.likes} like${post.likes === 1 ? "" : "s"}`;
          });
          // Comment button
          const commentButton = postEl.querySelector(".comment-button");
          const commentSection = postEl.querySelector(".comment-section");
          commentButton.addEventListener("click", () => {
            if (commentSection.classList.contains("active")) {
              commentSection.classList.remove("active");
            } else {
              commentSection.classList.add("active");
              commentSection.querySelector(".comment-input").focus();
            }
          });
          // Comment form submission
          const form = postEl.querySelector("form.comment-input-container");
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = form.querySelector(".comment-input");
            const text = input.value.trim();
            if (text === "") return;
            // Add comment
            const newComment = { id: self.crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(), userId: "currentUser", text };
            post.comments.push(newComment);
            // Update comment list
            const commentListEl = postEl.querySelector(".comment-list");
            const user = findUserById("currentUser") || { username: "Tú" };
            const newCommentEl = document.createElement("p");
            newCommentEl.innerHTML = `<strong>${user.username}</strong> ${escapeHtml(text)}`;
            commentListEl.appendChild(newCommentEl);
            // Scroll down comment list
            commentListEl.scrollTop = commentListEl.scrollHeight;
            // Clear input
            input.value = "";
          });
          // Profile navigation on clicking header
          const postHeader = postEl.querySelector(".post-header");
          postHeader.addEventListener("click", () => openProfileModal(user.id));
          postHeader.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openProfileModal(user.id);
            }
          });
          feed.appendChild(postEl);
        });
      }
      function renderComments(comments) {
        return comments
          .map((c) => {
            const u = findUserById(c.userId) || { username: "Tú" };
            return `<p><strong>${u.username}</strong> ${escapeHtml(c.text)}</p>`;
          })
          .join("");
      }
      // User "currentUser" data simulation
      users.push({
        id: "currentUser",
        username: "OMORA",
        avatar:
          "https://www.colores.org.es/imagenes_colores/violeta-frances.jpg",
        bio: "OMORA, una oportunidad llena de luz para las mascotas",
        followers: 3.4,
        following: 10,
        posts: [],
      });
      // Stories Modal logic:
      const storyModal = document.getElementById("storyModal");
      const modalAvatar = storyModal.querySelector(".modal-header img");
      const modalUsername = storyModal.querySelector(".modal-header .username");
      const modalStoryImage = storyModal.querySelector(".story-image-container img");
      const modalProgressContainer = storyModal.querySelector(".progress-bar-container");
      const modalCloseBtn = storyModal.querySelector(".close-btn");
      const navArrowLeft = storyModal.querySelector("button.nav-arrow.left");
      const navArrowRight = storyModal.querySelector("button.nav-arrow.right");
      const navTouchLeft = storyModal.querySelector(".nav-touch-left");
      const navTouchRight = storyModal.querySelector(".nav-touch-right");
      let currentStoryIndex = 0;
      const STORY_DURATION = 5000;
      let storyTimer = null;
      let progressBars = [];
      function buildProgressBars(length) {
        modalProgressContainer.innerHTML = "";
        progressBars = [];
        for (let i = 0; i < length; i++) {
          const bar = document.createElement("div");
          bar.className = "progress-bar";
          modalProgressContainer.appendChild(bar);
          progressBars.push(bar);
        }
      }
      function resetProgressBars() {
        progressBars.forEach((bar) => {
          bar.style.transition = "none";
          bar.style.transform = "scaleX(0)";
          bar.classList.remove("complete");
        });
      }
      function animateProgressBar(index) {
        if (!progressBars[index]) return;
        progressBars[index].style.transition = "none";
        progressBars[index].style.transform = "scaleX(0)";
        void progressBars[index].offsetWidth;
        progressBars[index].style.transition = `transform ${STORY_DURATION}ms linear`;
        progressBars[index].style.transform = "scaleX(1)";
        storyTimer = setTimeout(() => {
          nextStory();
        }, STORY_DURATION);
      }
      function showStory(index) {
        if (index < 0) index = stories.length - 1;
        if (index >= stories.length) index = 0;
        currentStoryIndex = index;
        const story = stories[index];
        const user = findUserById(story.userId);
        if (!user) return;
        modalAvatar.src = user.avatar;
        modalAvatar.alt = `Avatar de ${user.username}`;
        modalUsername.textContent = user.username;
        modalStoryImage.src = story.image;
        modalStoryImage.alt = `Historia de ${user.username}`;
        // Mark story viewed by currentUser
        if (!story.viewedUsers.includes("currentUser")) {
          story.viewedUsers.push("currentUser");
        }
        // Mark watched visually in stories list
        const storyEls = [...storiesList.children];
        storyEls.forEach((el, i) => {
          el.classList.toggle("watched", stories[i].viewedUsers.includes("currentUser"));
        });
        // Update ARIA pressed
        storyEls.forEach((el, i) =>
          el.setAttribute("aria-pressed", i === index ? "true" : "false")
        );
        resetProgressBars();
        for (let i = 0; i < index; i++) {
          progressBars[i].style.transform = "scaleX(1)";
          progressBars[i].classList.add("complete");
        }
        if (progressBars[index]) {
          progressBars[index].style.transform = "scaleX(0)";
          progressBars[index].classList.remove("complete");
        }
        animateProgressBar(index);
      }
      function openStoryModal(index) {
        buildProgressBars(stories.length);
        showStory(index);
        storyModal.classList.add("active");
        storyModal.focus();
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onStoryKeyDown);
      }
      function closeStoryModal() {
        storyModal.classList.remove("active");
        clearTimeout(storyTimer);
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onStoryKeyDown);
      }
      function nextStory() {
        showStory(currentStoryIndex + 1);
      }
      function prevStory() {
        showStory(currentStoryIndex - 1);
      }
      function onStoryKeyDown(e) {
        if (!storyModal.classList.contains("active")) return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          nextStory();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevStory();
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeStoryModal();
        }
      }
      modalCloseBtn.addEventListener("click", closeStoryModal);
      navArrowLeft.addEventListener("click", () => { prevStory(); });
      navArrowRight.addEventListener("click", () => { nextStory(); });
      navTouchLeft.addEventListener("click", () => { prevStory(); });
      navTouchRight.addEventListener("click", () => { nextStory(); });
      storyModal.addEventListener("click", (e) => {
        if (e.target === storyModal) closeStoryModal();
      });

      // Profile Modal Logic
      const profileModal = document.getElementById("profileModal");
      const profileContent = document.getElementById("profileContent");
      const closeProfileBtn = document.getElementById("closeProfileBtn");
      function openProfileModal(userId) {
        const user = findUserById(userId);
        if (!user) return;
        profileModal.style.display = "block";
        document.body.style.overflow = "hidden";
        profileModal.focus();
        // Render profile content
        const userPosts = posts.filter((p) => p.userId === userId);
        profileContent.innerHTML = `
          <section aria-label="Perfil de ${user.username}">
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
              <img src="${user.avatar}" alt="Avatar de ${user.username}" width="80" height="80" style="border-radius:50%; border:3px solid var(--color-accent); background:white" />
              <div>
                <h2 style="margin:0; font-size:1.5rem; font-weight:700;">${user.username}</h2>
                <p style="color:var(--color-text-secondary); margin:0.25rem 0;">${escapeHtml(user.bio)}</p>
                <div style="display:flex; gap:1rem; font-weight:600; color:var(--color-text-secondary); user-select: text;">
                  <span><strong>${userPosts.length}</strong> publicaciones</span>
                  <span><strong>${user.followers}</strong> seguidores</span>
                  <span><strong>${user.following}</strong> siguiendo</span>
                </div>
              </div>
            </div>
            <div id="userPostGrid" style="display:grid; grid-template-columns: repeat(auto-fit,minmax(120px,1fr)); gap:1rem;">
              ${userPosts
                .map(
                  (p) =>
                    `<div tabindex="0" role="button" aria-label="Ver publicación" style="border-radius: var(--radius); overflow:hidden; cursor:pointer;">
                      <img src="${p.image}" alt="Publicación de ${user.username}" loading="lazy" style="width:100%; height:100%; object-fit: cover; display: block;"/>
                    </div>`
                )
                .join("")}
            </div>
          </section>
        `;
        // Add event listeners for posts thumbnails
        const postElements = profileContent.querySelectorAll("#userPostGrid div");
        postElements.forEach((el, index) => {
          el.addEventListener("click", () => {
            openPostModal(userPosts[index]);
          });
          el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openPostModal(userPosts[index]);
            }
          });
        });
      }
      closeProfileBtn.addEventListener("click", closeProfileModal);
      function closeProfileModal() {
        profileModal.style.display = "none";
        document.body.style.overflow = "";
        profileContent.innerHTML = "";
      }

      // Post Modal (opened from profile)
      let postModal = null;
      let postModalOverlay = null;
      function openPostModal(post) {
        if (!postModal) {
          postModalOverlay = document.createElement("div");
          postModalOverlay.style.position = "fixed";
          postModalOverlay.style.inset = "0";
          postModalOverlay.style.background = "rgba(0,0,0,0.8)";
          postModalOverlay.style.display = "flex";
          postModalOverlay.style.justifyContent = "center";
          postModalOverlay.style.alignItems = "center";
          postModalOverlay.style.zIndex = "1700";
          postModalOverlay.tabIndex = -1;
          postModalOverlay.setAttribute("role", "dialog");
          postModalOverlay.setAttribute("aria-modal", "true");

          postModal = document.createElement("div");
          postModal.style.background = "white";
          postModal.style.borderRadius = "var(--radius)";
          postModal.style.maxWidth = "600px";
          postModal.style.width = "90%";
          postModal.style.maxHeight = "90%";
          postModal.style.overflow = "auto";
          postModal.style.position = "relative";
          postModal.style.display = "flex";
          postModal.style.flexDirection = "column";
          postModal.style.userSelect = "text";

          // Close button
          const closeBtn = document.createElement("button");
          closeBtn.textContent = "×";
          closeBtn.style.position = "absolute";
          closeBtn.style.top = "0.5rem";
          closeBtn.style.right = "0.5rem";
          closeBtn.style.fontSize = "2rem";
          closeBtn.style.background = "none";
          closeBtn.style.border = "none";
          closeBtn.style.cursor = "pointer";
          closeBtn.setAttribute("aria-label", "Cerrar publicación");
          closeBtn.addEventListener("click", closePostModal);

          postModal.appendChild(closeBtn);
          postModalOverlay.appendChild(postModal);
          document.body.appendChild(postModalOverlay);

          postModalOverlay.addEventListener("click", (e) => {
            if (e.target === postModalOverlay) {
              closePostModal();
            }
          });
        }

        const user = findUserById(post.userId);

        postModal.innerHTML = `
          <button aria-label="Cerrar publicación" style="position:absolute;top:0.5rem;right:0.5rem;font-size:2rem;background:none;border:none;cursor:pointer;">×</button>
          <img src="${post.image}" alt="Publicación de ${user.username}" style="width:100%; height:auto; border-radius: var(--radius) var(--radius) 0 0;"/>
          <div style="padding: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem; cursor: pointer;" tabindex="0" role="button" aria-label="Ver perfil de ${user.username}">
              <img src="${user.avatar}" alt="Avatar de ${user.username}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--color-accent);" />
              <strong>${user.username}</strong>
            </div>
            <div style="margin-bottom: 0.5rem;">
              <strong>${post.likes} Me gusta</strong>
            </div>
            <div style="color: var(--color-text-secondary);">${escapeHtml(post.caption)}</div>
            <hr style="margin: 1rem 0" />
            <div id="postCommentsModal" style="max-height: 150px; overflow-y: auto;"></div>
            <form id="postCommentForm" style="display:flex; margin-top: 0.5rem;">
              <input id="postCommentInput" type="text" aria-label="Agregar comentario" placeholder="Agrega un comentario..." style="flex-grow:1; padding:0.5rem; font-size:1rem; border-radius: var(--radius); border:1px solid var(--color-border);" />
              <button type="submit" style="margin-left: 0.5rem; background: var(--btn-bg); color: white; border: none; border-radius: var(--radius); padding: 0 1rem; font-weight: 600; cursor: pointer;">Publicar</button>
            </form>
          </div>
        `;
        const closeBtn = postModal.querySelector("button[aria-label='Cerrar publicación']");
        closeBtn.addEventListener("click", closePostModal);
        // Render comments
        const commentsContainer = postModal.querySelector("#postCommentsModal");
        commentsContainer.innerHTML = "";
        post.comments.forEach((c) => {
          const u = findUserById(c.userId) || { username: "Tú" };
          const p = document.createElement("p");
          p.style.margin = "0 0 0.25rem 0";
          p.innerHTML = `<strong>${u.username}</strong> ${escapeHtml(c.text)}`;
          commentsContainer.appendChild(p);
        });
        // Add comment form
        const commentForm = postModal.querySelector("#postCommentForm");
        const commentInput = postModal.querySelector("#postCommentInput");
        commentForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const val = commentInput.value.trim();
          if (!val) return;
          const newComment = { id: Date.now().toString(), userId: "currentUser", text: val };
          post.comments.push(newComment);
          const u = findUserById("currentUser") || { username: "Tú" };
          const p = document.createElement("p");
          p.style.margin = "0 0 0.25rem 0";
          p.innerHTML = `<strong>${u.username}</strong> ${escapeHtml(val)}`;
          commentsContainer.appendChild(p);
          commentInput.value = "";
          commentsContainer.scrollTop = commentsContainer.scrollHeight;
          // Update feed comments too to keep sync
          renderPosts();
        });
        // Profile link in modal
        const profileLinkWrapper = postModal.querySelector("div[tabindex='0']");
        profileLinkWrapper.addEventListener("click", () => {
          openProfileModal(user.id);
          closePostModal();
        });
        profileLinkWrapper.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProfileModal(user.id);
            closePostModal();
          }
        });
        postModalOverlay.style.display = "flex";
        postModalOverlay.focus();
        document.body.style.overflow = "hidden";
      }
      function closePostModal() {
        if (!postModalOverlay) return;
        postModalOverlay.style.display = "none";
        postModal.innerHTML = "";
        document.body.style.overflow = "";
      }

      // Search modal
      const searchModal = document.getElementById("searchModal");
      const searchInput = document.getElementById("searchInput");
      const searchResults = document.getElementById("searchResults");
      const searchBtn = document.getElementById("searchBtn");
      const closeSearchBtn = document.getElementById("closeSearchBtn");
      searchBtn.addEventListener("click", () => openSearchModal());
      closeSearchBtn.addEventListener("click", () => closeSearchModal());
      function openSearchModal() {
        searchModal.style.display = "block";
        searchInput.value = "";
        searchInput.focus();
        document.body.style.overflow = "hidden";
        filterSearchResults("");
      }
      function closeSearchModal() {
        searchModal.style.display = "none";
        searchResults.innerHTML = "";
        document.body.style.overflow = "";
      }
      function filterSearchResults(query) {
        query = query.toLowerCase();
        // Search users and posts
        const matchedUsers = users.filter(
          (u) =>
            u.username.toLowerCase().includes(query) ||
            (u.bio && u.bio.toLowerCase().includes(query))
        );
        const matchedPosts = posts.filter((p) =>
          p.caption.toLowerCase().includes(query)
        );
        let html = "";
        if (matchedUsers.length > 0) {
          html += "<h3>Usuarios</h3><ul style='list-style:none;padding:0;margin:0 0 1rem 0;'>";
          matchedUsers.forEach((u) => {
            html += `
              <li style="margin-bottom:0.5rem;cursor:pointer;" tabindex="0" role="button" aria-label="Ver perfil de ${u.username}" data-userid="${u.id}">
                <img src="${u.avatar}" alt="Avatar de ${u.username}" style="width:30px; height:30px; border-radius:50%; vertical-align: middle; margin-right:0.5rem; user-select:none;" />
                <strong>${u.username}</strong> - ${escapeHtml(u.bio || "")}
              </li>
            `;
          });
          html += "</ul>";
        }
        if (matchedPosts.length > 0) {
          html += "<h3>Publicaciones</h3><ul style='list-style:none;padding:0;margin:0 0 1rem 0;'>";
          matchedPosts.forEach((p) => {
            const u = findUserById(p.userId);
            html += `
              <li style="margin-bottom:0.75rem;cursor:pointer;" tabindex="0" role="button" aria-label="Ver publicación de ${u.username}" data-postid="${p.id}">
                <img src="${p.image}" alt="Publicación de ${u.username}" style="width:50px; height:50px; border-radius: var(--radius); vertical-align: middle; object-fit: cover; margin-right: 0.5rem; user-select:none;" />
                <strong>${u.username}</strong> - ${escapeHtml(p.caption)}
              </li>
            `;
          });
          html += "</ul>";
        }
        if (!html) {
          html = "<p>No se encontraron resultados.</p>";
        }
        searchResults.innerHTML = html;
        // Add interaction for users and posts clicks
        const userItems = searchResults.querySelectorAll("li[data-userid]");
        userItems.forEach((item) => {
          item.addEventListener("click", () => {
            openProfileModal(item.dataset.userid);
            closeSearchModal();
          });
          item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openProfileModal(item.dataset.userid);
              closeSearchModal();
            }
          });
        });
        const postItems = searchResults.querySelectorAll("li[data-postid]");
        postItems.forEach((item) => {
          item.addEventListener("click", () => {
            const post = posts.find((p) => p.id === item.dataset.postid);
            if (post) {
              openPostModal(post);
              closeSearchModal();
            }
          });
          item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              const post = posts.find((p) => p.id === item.dataset.postid);
              if (post) {
                openPostModal(post);
                closeSearchModal();
              }
            }
          });
        });
      }
      searchInput.addEventListener("input", (e) => {
        filterSearchResults(e.target.value);
      });
      // Notifications modal
      const notificationsModal = document.getElementById("notificationsModal");
      const notificationsBtn = document.getElementById("notificationsBtn");
      const closeNotificationsBtn = document.getElementById("closeNotificationsBtn");
      const notificationsList = document.getElementById("notificationsList");
      const notificationsData = [
        { id: 1, text: "Ana le dio me gusta a tu publicación." },
        { id: 2, text: "Luis comentó: 'Qué hermoso, quiero adoptarlo.'" },
        { id: 3, text: "Carla comenzó a seguirte." },
        { id: 4, text: "Maria comentó: 'Estoy interesada en el gato'" },
        { id: 5, text: "Mateo comenzó a seguirte." },
        { id: 2, text: "Carla comenzó a seguirte."  },
        { id: 2, text: "Maria comentó: 'Qué hermoso, quiero adoptarlo." },
        { id: 2, text: "Valentina comentó: 'Qué hermoso cachorrito!'" },
        { id: 2, text: "Javier comentó: 'Qué hermoso!'" },
        { id: 2, text: "Andres comentó: 'Quiero uno'" },
        { id: 2, text: "Susana comentó: 'Estoy interesada'" },
        { id: 2, text: "Andrea comentó: 'Estoy interesada en los gatos'" },
        { id: 2, text: "Mauricio empezo a seguirte" },
        { id: 2, text: "Manuela comentó: 'Estoy interesada'" },
        { id: 2, text: "Sebastian comentó: 'Quiero adoptar uno'" },
        { id: 2, text: "Mariana comentó: 'Estan hermosos'" },
        { id: 2, text: "Santiago comentó: 'Quiero mas informacion'" },
        { id: 2, text: "Jesus comentó: 'Estoy interesado en los cachorros'" },
        
        
      ];
      notificationsBtn.addEventListener("click", openNotificationsModal);
      closeNotificationsBtn.addEventListener("click", closeNotificationsModal);
      function openNotificationsModal() {
        notificationsModal.style.display = "block";
        document.body.style.overflow = "hidden";
        notificationsModal.focus();
        renderNotifications();
      }
      function closeNotificationsModal() {
        notificationsModal.style.display = "none";
        notificationsList.innerHTML = "";
        document.body.style.overflow = "";
      }
      function renderNotifications() {
        notificationsList.innerHTML = "";
        notificationsData.forEach((n) => {
          const li = document.createElement("li");
          li.textContent = n.text;
          li.style.padding = "0.5rem 0";
          li.style.borderBottom = "1px solid var(--color-border)";
          notificationsList.appendChild(li);
        });
      }
      // Navigation buttons
      const homeBtn = document.getElementById("homeBtn");
      const profileBtn = document.getElementById("profileBtn");
      homeBtn.addEventListener("click", () => {
        // Return to feed, close modals if any open
        closeProfileModal();
        closeSearchModal();
        closeNotificationsModal();
        mainContentFocus();
      });
      profileBtn.addEventListener("click", () => {
        openProfileModal("currentUser");
      });
      function mainContentFocus() {
        document.getElementById("mainContent").focus();
      }
      // Initialize
      renderStories();
      renderPosts();
    })();