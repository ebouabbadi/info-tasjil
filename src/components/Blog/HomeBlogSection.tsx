import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Blogs"
            title="Our Recent News"
            paragraph="العرب فرع من الشعوب السامية تتركز أساسًا في الوطن العربي بشقيه الآسيوي والإفريقي إضافة إلى الساحل الشرقي لإفريقيا وكأقليات في إيران وتركيا ودول المهجر، واحدهم عربي ويتحدد هذا المعنى على خلفيات إما إثنية أو لغوية أو ثقافية. سياسيًا العربي هو كل شخص لغته الأم العربية ووالده عربي. وتوجد أقليات عربية وبأعداد معتبرة في الأمريكيتين وفي أوروبا وإيران وتركيا. تعني لفظة «عرب» البداوة، في كل اللغات السامية القديمة التي ما زالت بعض نقوشها موجودة حتى اليوم، ولم تكن تُفهم إلا بهذا المعنى في أقدم النصوص التاريخية التي وصلت الباحثين المعاصرين، وهي النصوص الآشورية، وقد قصدت بها البدو بعامّة، واستعملت بهذا المعنى عند غيرهم. ولمّا توسعت مدارك الأعاجم وزاد اتصالهم واحتكاكهم بالعرب وبشبه الجزيرة العربية، توسعوا في استعمال اللفظة حتى أضحت تشمل أكثر العرب بوصفهم أهل بادية، وأن حياتهم حياة أعراب، ومن هنا غلبت على بلادهم فصارت عَلَمية عند أولئك الأعاجم، على بلاد العرب وعلى سكانها،  «العربية» (باللاتينية: Arabia). درج المؤرخون العرب حتى الأيام الراهنة بقسمة تاريخ العرب إلى قسمين، قبل الإسلام والمدعو جاهلية، وبعد الإسلام الذي تمكن فيه العرب من سيادة إمبراطورية واسعة ومزدهرة حضاريًا، خصوصًا في العصر الأموي - سواءً في دمشق أم الأندلس - والعصر العباسي - خصوصًا العصر العباسي الأول وحاضرته بغداد - هذه السيادة أفرزت أنماطًا حضارية غنية، وتمازجت مع الشعوب الأخرى المعتنقة للإسلام، وانتشر الاستعراب في عدة أقاليم أهمها الهلال الخصيب، وشمال ووسط وادي النيل، والمغرب العربي، والأهواز، وبشكل أقل سواحل القرن الأفريقي، وتعرف هذه الأقاليم باسم الوطن العربي، ويعود لمرحلة النهضة العربية في القرن "
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 4).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
