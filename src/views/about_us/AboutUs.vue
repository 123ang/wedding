<template>
  <div class="body">
      <div class="container">
        <div>
          <div class="title">About Us</div>  
          <div class="content">
            <p v-if="$i18n.locale=='en'">
              We are a passionate team of wedding enthusiasts and tech innovators, committed to transforming the way couples plan their weddings. Our platform is designed to cater to the diverse needs of every wedding, offering a wide range of tools and services to simplify the planning process. We provide more than just a price comparison tool; we offer a comprehensive solution for all your wedding needs, from the initial planning stages to the final celebration.
            </p>
            <p v-if="$i18n.locale=='cn'">
              我们是一支充满热情的婚礼爱好者和科技创新者团队，致力于改变新人策划婚礼的方式。我们的平台旨在满足每场婚礼的多样化需求，提供广泛的工具和服务以简化策划过程。我们提供的不仅仅是价格比较工具；我们为您的所有婚礼需求提供全面的解决方案，从初步策划阶段到最后的庆祝活动。
            </p>
            <p v-if="$i18n.locale=='my'">
              Kami adalah pasukan yang berdedikasi terdiri daripada peminat perkahwinan dan inovator teknologi, berkomitmen untuk mengubah cara pasangan merancang perkahwinan mereka. Platform kami direka untuk melayani kepelbagaian keperluan setiap perkahwinan, menawarkan pelbagai alat dan perkhidmatan untuk memudahkan proses perancangan. Kami menawarkan lebih daripada sekadar alat perbandingan harga; kami menawarkan penyelesaian komprehensif untuk semua keperluan perkahwinan anda, dari peringkat perancangan awal hingga sambutan akhir.
            </p>
          </div>
          
        </div>

        <div>
          <div class="title">Vision</div>  
          <div class="content">
            <p v-if="$i18n.locale=='en'">
              To be the premier online platform for wedding planning, offering a comprehensive suite of tools and resources that empower couples to create their dream wedding with ease and confidence.
            </p>
            <p v-if="$i18n.locale=='cn'">
              成为首屈一指的在线婚礼策划平台，提供全面的工具和资源，使新人能够轻松自信地创建他们的梦想婚礼
            </p>
            <p v-if="$i18n.locale=='my'">
              Kami adalah pasukan yang berdedikasi terdiri daripada peminat perkahwinan dan inovator teknologi, berkomitmen untuk mengubah cara pasangan merancang perkahwinan mereka. Platform kami direka untuk melayani kepelbagaian keperluan setiap perkahwinan, menawarkan pelbagai alat dan perkhidmatan untuk memudahkan proses perancangan. Kami menawarkan lebih daripada sekadar alat perbandingan harga; kami menawarkan penyelesaian komprehensif untuk semua keperluan perkahwinan anda, dari peringkat perancangan awal hingga sambutan akhir.
            </p>
          </div>
          
        </div>

        <div>
          <div class="title">Mission</div>  
          <div class="content">
            <p v-if="$i18n.locale=='en'">
              Our mission is to revolutionize the wedding planning process by providing an all-in-one platform that caters to every aspect of wedding preparation. From price comparisons and vendor selection to photo sharing and RSVP management, we aim to make wedding planning a seamless, enjoyable experience for every couple.
            </p>
            <p v-if="$i18n.locale=='cn'">
              我们的使命是通过提供一站式平台，满足婚礼准备的各个方面，革新婚礼策划过程。从价格比较和供应商选择到照片分享和RSVP管理，我们的目标是使婚礼策划成为每对新人的无缝，愉快的体验。
            </p>
            <p v-if="$i18n.locale=='my'">
              Misi kami adalah untuk merevolusikan proses perancangan perkahwinan dengan menyediakan platform serba ada yang melayani setiap aspek persiapan perkahwinan. Dari perbandingan harga dan pemilihan vendor hingga perkongsian foto dan pengurusan RSVP, kami bertujuan untuk menjadikan perancangan perkahwinan sebuah pengalaman yang lancar dan menyenangkan bagi setiap pasangan.
            </p>
          </div>
          
        </div>

        <div>
          <div class="title">Core Values</div>  
          <div class="content">
            <p v-if="$i18n.locale=='en'">
              <ul>
                <li>Customer Centricity: Our customers are at the heart of everything we do. We strive to understand their needs and deliver services that exceed their expectations.</li>
                <li>Transparency: We believe in clear and honest communication. Our platform provides transparent information to help couples make informed decisions.</li>
                <li>Innovation: We continuously seek to improve and innovate, ensuring our platform remains user-friendly, efficient, and up-to-date with the latest wedding trends.</li>
                <li>Integrity: We uphold high ethical standards in our operations, ensuring fair practices across all our services.</li>
                <li>Collaboration: We value our relationships with vendors and partners, working together to provide a comprehensive range of services for our customers.</li>
              </ul>
            </p>
            <p v-if="$i18n.locale=='cn'">
              <ul>
                <li>客户为中心： 我们的客户是我们做的一切的核心。我们努力了解他们的需求并提供超出他们期望的服务。</li>
                <li>透明度： 我们相信清晰诚实的沟通。我们的平台提供透明的信息，帮助新人做出明智的决定。</li>
                <li>创新： 我们不断寻求改进和创新，确保我们的平台保持用户友好，高效，并与最新的婚礼趋势保持同步。</li>
                <li>诚信： 我们在运营中坚持高道德标准，确保我们所有服务的公平实践。</li>
                <li>合作： 我们重视与供应商和合作伙伴的关系，共同提供全面的服务给我们的客户。</li>
              </ul>
            </p>
            <p v-if="$i18n.locale=='my'">
              <ul>
                <li>Berpusatkan Pelanggan: Pelanggan kami berada di hati segala yang kami lakukan. Kami berusaha memahami keperluan mereka dan memberikan perkhidmatan yang melebihi jangkaan mereka.</li>
                <li>Ketelusan: Kami percaya dalam komunikasi yang jelas dan jujur. Platform kami menyediakan maklumat yang telus untuk membantu pasangan membuat keputusan yang berinformasi.</li>
                <li>Inovasi: Kami sentiasa berusaha untuk memperbaiki dan berinovasi, memastikan platform kami kekal mesra pengguna, cekap, dan selaras dengan trend perkahwinan terkini.</li>
                <li>Integriti: Kami mengekalkan standard etika yang tinggi dalam operasi kami, memastikan amalan yang adil di seluruh perkhidmatan kami.</li>
                <li>Kolaborasi: Kami menghargai hubungan kami dengan vendor dan rakan kongsi, bekerja bersama untuk menyediakan rangkaian perkhidmatan yang komprehensif untuk pelanggan kami.</li>
              </ul>
            </p>
          </div>
          
        </div>
         
      </div>
      
 </div>
</template>

<script>




export default {
name: 'AboutUs',
components: {

},
data() {
  return{
  
  }
}
}
</script>
  
  <style scoped>

  </style>
  