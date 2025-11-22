# ScrollFloat Component - React Bits

## 📝 Deskripsi

Komponen **ScrollFloat** adalah komponen animasi scroll dari React Bits yang memberikan efek animasi karakter-per-karakter yang muncul saat pengguna melakukan scroll. Komponen ini menggunakan GSAP (GreenSock Animation Platform) untuk memberikan animasi yang smooth dan profesional.

## ✅ Status Instalasi

✔️ **Berhasil ditambahkan!** Komponen ScrollFloat telah berhasil diinstall menggunakan shadcn CLI.

### File yang Ditambahkan:
- `components/ScrollFloat.tsx` - Komponen utama ScrollFloat

### Dependencies yang Digunakan:
- `gsap` (v3.13.0) - Sudah terinstall ✅
- `gsap/ScrollTrigger` - Plugin GSAP untuk scroll-based animations

## 🎨 Implementasi

ScrollFloat telah diintegrasikan ke dalam komponen-komponen berikut:

### 1. **About Component** (`components/About.tsx`)
- Heading "About Me" 
- Heading "Technologies I Work With"

### 2. **Projects Component** (`components/Projects.tsx`)
- Heading "Featured Projects"

### 3. **Contact Component** (`components/Contact.tsx`)
- Heading "Get In Touch"

## 🔧 Cara Penggunaan

### Basic Usage

```tsx
import ScrollFloat from "./ScrollFloat";

function MyComponent() {
  return (
    <ScrollFloat>
      Your Text Here
    </ScrollFloat>
  );
}
```

### Advanced Usage dengan Props

```tsx
<ScrollFloat 
  containerClassName="!mb-6"
  textClassName="text-3xl md:text-4xl font-bold"
  animationDuration={1.5}
  ease="power2.inOut"
  scrollStart="top bottom"
  scrollEnd="bottom top"
  stagger={0.05}
>
  Animated Heading
</ScrollFloat>
```

## 📋 Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `children` | `ReactNode` | Required | Teks yang akan dianimasikan |
| `containerClassName` | `string` | `''` | Class CSS untuk container (h2) |
| `textClassName` | `string` | `''` | Class CSS untuk span teks |
| `animationDuration` | `number` | `1` | Durasi animasi dalam detik |
| `ease` | `string` | `'back.inOut(2)'` | Easing function GSAP |
| `scrollStart` | `string` | `'center bottom+=50%'` | Posisi mulai scroll trigger |
| `scrollEnd` | `string` | `'bottom bottom-=40%'` | Posisi akhir scroll trigger |
| `stagger` | `number` | `0.03` | Delay antar karakter (detik) |
| `scrollContainerRef` | `RefObject<HTMLElement>` | `undefined` | Ref untuk custom scroll container |

## 🎯 Fitur Utama

1. **Character-by-Character Animation**: Setiap karakter dianimasikan secara individual dengan stagger effect
2. **Scroll-Based Trigger**: Animasi dimulai saat elemen masuk viewport
3. **Smooth Transitions**: Menggunakan GSAP untuk animasi yang sangat smooth
4. **Customizable**: Banyak props untuk mengkustomisasi animasi
5. **Responsive**: Otomatis menyesuaikan dengan ukuran layar

## 🎨 Efek Animasi

Animasi ScrollFloat mencakup:
- **Opacity**: Fade in dari 0 ke 1
- **Y Position**: Slide up dari 120% ke 0%
- **Scale Y**: Stretch dari 2.3x ke 1x
- **Scale X**: Compress dari 0.7x ke 1x
- **Transform Origin**: Animasi dari top center

## 💡 Tips Penggunaan

1. **Gunakan `!mb-6` untuk override margin**: Karena ScrollFloat menggunakan `my-5` default, gunakan `!` untuk override
   ```tsx
   containerClassName="!mb-6"
   ```

2. **Kombinasikan dengan Tailwind Classes**: Anda bisa menambahkan class Tailwind untuk styling
   ```tsx
   textClassName="text-4xl font-bold text-accent"
   ```

3. **Sesuaikan Stagger untuk Efek Berbeda**:
   - Stagger kecil (0.01-0.03): Efek cepat dan subtle
   - Stagger besar (0.05-0.1): Efek dramatis dan jelas

4. **Custom Scroll Container**: Jika menggunakan custom scroll container (bukan window), pass ref-nya
   ```tsx
   const scrollRef = useRef<HTMLDivElement>(null);
   
   <ScrollFloat scrollContainerRef={scrollRef}>
     Text
   </ScrollFloat>
   ```

## 🚀 Performance

- Menggunakan `willChange` CSS property untuk optimasi
- GSAP ScrollTrigger dengan `scrub: true` untuk smooth scroll-linked animation
- Efficient character splitting dengan `useMemo`

## ⚠️ Catatan Penting

1. **Hanya untuk String**: Component ini hanya bekerja dengan children berupa string
2. **GSAP Required**: Pastikan GSAP sudah terinstall (sudah terinstall di project ini)
3. **Client Component**: Komponen ini menggunakan hooks dan harus digunakan dalam client component (`"use client"`)

## 🎬 Demo

Untuk melihat animasi ScrollFloat bekerja:
1. Buka browser di `http://localhost:2999`
2. Scroll ke section About, Projects, atau Contact
3. Perhatikan heading yang muncul dengan animasi karakter-per-karakter

## 📚 Referensi

- [React Bits Documentation](https://reactbits.dev)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [GSAP Easing](https://greensock.com/docs/v3/Eases)

---

**Status**: ✅ Berhasil diimplementasikan tanpa error!
**Tested**: ✅ Development server berjalan dengan baik
**Ready to Use**: ✅ Siap digunakan di seluruh aplikasi
